package rs.edu.visa.visaserver.beer;

import java.util.stream.Stream;

import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class BeerCommandLineRunner implements CommandLineRunner {

  private final BeerRepository repository;

  public BeerCommandLineRunner(BeerRepository repository) {
    this.repository = repository;
  }

  @Override
  public void run(String... strings) {
    Stream.of(
        "Kentucky Brunch Brand Stout",
        "Good Morning",
        "Very Hazy",
        "King Julius",
        "Budweiser",
        "Coors Light",
        "PBR")
        .forEach(name -> repository.save(new Beer(name)));
    repository.findAll().forEach(System.out::println);
  }
}

