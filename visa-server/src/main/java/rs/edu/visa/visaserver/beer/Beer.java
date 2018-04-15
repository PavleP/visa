package rs.edu.visa.visaserver.beer;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter
@Setter
@NoArgsConstructor
public class Beer {

  @Id
  @GeneratedValue
  private Long id;
  private String name;

  public Beer(String name) {
    this.name = name;
  }

  @Override
  public String toString() {
    return "Beer{" + "id=" + id + ", name='" + name + '\'' + '}';
  }
}