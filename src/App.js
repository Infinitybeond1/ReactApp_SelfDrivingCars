import "./styles.css";
import tesla1 from '../img/tesla1.jpeg'; // Tell webpack this JS file uses this image
import lidarcar from '../img/Lidarcar.jpeg';
import YoutubeEmbed from "./YoutubeEmbed";


export default function App() {
  return (
    <div className="App">
      <h1>Automatically guided Vehicles</h1>
      <h2>Driving into the future</h2>
      <h3>What they do</h3>
      <p1>
        Self driving cars, AKA Automatically Guided Vehicles, are vehicles
        (which are sometimes battery powered) that can drive themselves. These
        types of vehicles use either Cameras, Radar, Lidar, Sonar, or a
        combination of them. The most popular type of these cars is a tesla.{" "}
      </p1>
      <h3> Teslas </h3>
      <p1>
        Teslas are electric cars that use State of The Art technology to drive
        themselves. They use a proprietary 8 camera setup which provide the car
        with a 360° veiw of the car and its surroundings. Tesla models (2020 and
        prior) are also equiped with radar technology, which are more acurate
        than cameras but only up to 10 meters as the radio waves lose
        effectiveness over a long distance.
      </p1>
      <h3>Cameras</h3>
      <p1>
        The cameras on tesla cars have a max range of 250 meters which is a
        massive increase of range from the radar (which only has the range of
        10m)
      </p1>
      <h3>Sonar</h3>
      <p1>
          Sonar (which isn't use on tesla cars) uses sound waves, which are not audible to the human ear, to detect obstacles by calculating how long it takes for the sound to bounce off of an object. This only works at realatively close range which is why is ussually used for parking assistance.
      </p1>
      <h3>Lidar</h3>
      <p1>
        Lidar is another form of obstacle detection which uses invisble lasers attached to a spinning object, to get 360° coverage of the car with only one camera, this is a realatively new technology and its expensive. Lidar based detection is primarily used for robotic vacuums. 
      </p1>
      <h3>Images</h3>
      <img src={tesla1} alt="Tesla" /> 
      <h3>Video</h3>
      <YoutubeEmbed embedId="tlThdr3O5Qo" />

      <h4>Github</h4>
      <a href="https://pluralsight.com">Repository</a>
    </div>
  );
}
