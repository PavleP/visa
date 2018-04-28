import intl from "react-intl-universal";
import _ from "lodash";
import React, { Component } from "react";

const SUPPORT_LOCALES = [
  {
    name: "Serbian",
    value: "sr-RS"
  },
  {
    name: "English",
    value: "en-US"
  }

];

class InitLocale extends Component {
  state = { initDone: false };

  constructor(props) {
    super(props);
    this.onSelectLocale = this.onSelectLocale.bind(this);
  }

  componentDidMount() {
    this.loadLocales();
  }

  render() {
    return (
      this.state.initDone &&
      <div>
        {this.renderLocaleSelector()}
      </div>
    );
  }

  loadLocales() {
    let currentLocale = intl.determineLocale({
      urlLocaleKey: "lang",
      cookieLocaleKey: "lang"
    });
    if (!_.find(SUPPORT_LOCALES, { value: currentLocale })) {
      currentLocale = "en-US";
    }

    fetch(`locales/${currentLocale}.json`)
        .then(res => {
          return res.json();
        })
        .then(translJson => {
          console.log("App locale data", translJson);
          // init method will load CLDR locale data according to currentLocale
          return intl.init({
            currentLocale,
            locales: {
              [currentLocale]: translJson
            }
          });
        })
        .then(() => {
          // After loading CLDR locale data, start to render
          this.setState({ initDone: true });
          this.props.handler();
        });
  }

  renderLocaleSelector() {
    return (
      <select onChange={this.onSelectLocale} defaultValue="">
        <option value="" disabled>Change Language</option>
        {SUPPORT_LOCALES.map(locale => (
          <option key={locale.value} value={locale.value}>{locale.name}</option>
        ))}
      </select>
    );
  }

  onSelectLocale(e) {
    let lang = e.target.value;
    //eslint-disable-next-line
    location.search = `?lang=${lang}`;
  }
}

export default InitLocale;
