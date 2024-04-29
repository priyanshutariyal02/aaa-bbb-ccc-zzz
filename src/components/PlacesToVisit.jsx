import React from "react";
import { direction } from "../assets/icons/icon.js";
import chamba from "../assets/img/chamba.jpg"
const PlacesToVisit = () => {
  return (
    <div className="w-full h-[auto] mt-[4rem]">
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-center font-bold text-[4.5rem] special-offer">
          <span className="text-gray-800">Places to</span>{" "}
          <span className="text-[#ffae00]">Visit</span>
        </h1>
        <div className="text-center my-2 text-lg font-[400] special-offer-para italic">
          <p>"Unforgettable moments, crafted for you"</p>
          <p>"Always say yes to new adventures."</p>
        </div>
      </div>

      <div className="flex flex-wrap justify-center items-center my-11 gap-10 place-section">
        {/* card */}
        <div className="w-[25rem] bg-white shadow-xl rounded-lg card flex flex-col items-center pt-3">
          <div className="w-[23rem] h-[20rem] relative overflow-hidden rounded-t-lg place-card-img">
            <img
              src="https://uttarakhandtourism.gov.in/sites/default/files/2020-10/dhanaulti.jpg"
              alt=""
              className="w-[23] h-[25rem] object-cover transition duration-300 ease-in-out hover:scale-110 object-center overflow-hidden"
            />
          </div>

          <div className="p-3">
            <p className="text-[24px] font-bold tracking-wide mb-2">
              DHANAULTI- JUST 7KM AWAY FROM OUR RESORT.
            </p>
            <p className="h-[15rem] max-h-[400px] w-full overflow-y-auto overflow-hidden text-justify p-2">
              Dhanaulti is a quiet hill station at an elevation of 2286 meters
              above sea level, it offers panoramic views of the lofty Himalayas.
              It is known for lush green slopes, fresh air, vibes of calm and
              solitude and picturesque mountain views. Situated in the foothills
              of the Garhwal Himalayan range. The town is densely enveloped by
              the velvety rhododendrons, deodar, and tall oak forests. Heavy
              snowfall during winters, attracts many tourists here. Dhanaulti is
              still untouched by the maddening summer rush to hill stations, so
              it offers a holiday privacy that many seek. many tourists prefer
              Dhanaulti as an honey moon destination.
            </p>
            <div className="flex justify-between gap-7 items-center p-4 font-semibold text-gray-700 tracking-wider">
              <img
                src={direction}
                alt="location"
                className="w-[40px] rounded-lg shadow-md bg-slate-300/20 p-1"
              />
              <a href="https://maps.app.goo.gl/JxszDckZGNrFGtWQ6">
                <p>
                  <span className="bg-[#ffae00] text-white p-2 rounded-lg font-semibold">
                    Location
                  </span>
                </p>
              </a>
            </div>
          </div>
        </div>

        <div className="w-[25rem] bg-white shadow-xl rounded-lg card flex flex-col items-center pt-3">
          <div className="w-[23rem] h-[20rem] relative overflow-hidden rounded-t-lg place-card-img">
            <img
              src="https://travelsetu.com/apps/uploads/new_destinations_photos/destination/2023/12/16/e5cefaab411e0511f0b3cf1a7d667ad0_1000x1000.jpg"
              alt=""
              className="w-[23] h-[25rem] object-cover transition duration-300 ease-in-out hover:scale-110 object-center overflow-hidden"
            />
          </div>

          <div className="p-3">
            <p className="overflow-y-auto overflow-hidden text-[24px] max-h-[70px] font-bold tracking-wide mb-2">
              SURKANDA DEVI TEMPLE:- 13KM AWAY FROM OUR RESORT
            </p>
            <p className="h-[15rem] max-h-[400px] w-full overflow-y-auto overflow-hidden text-justify p-2">
              The surkanda devi temple is one of the 51 shakti peeth and has a
              great religious importance. It is at an altitude of about 2756
              metres lies close to nearby hill stations of Dhanaulti and Chamba.
              It is surrounded by dense forests and affords a scenic view of the
              surrounding region including the Himalayas to the north, and
              certain cities to the south like Dehradun and Rishikesh.
            </p>
            <div className="flex justify-between gap-7 items-center p-4 font-semibold text-gray-700 tracking-wider">
              <img
                src={direction}
                alt="location"
                className="w-[40px] rounded-lg shadow-md bg-slate-300/20 p-1"
              />
              <a href="https://maps.app.goo.gl/JxszDckZGNrFGtWQ6">
                <p>
                  <span className="bg-[#ffae00] text-white p-2 rounded-lg font-semibold">
                    Location
                  </span>
                </p>
              </a>
            </div>
          </div>
        </div>

        <div className="w-[25rem] bg-white shadow-xl rounded-lg card flex flex-col items-center pt-3">
          <div className="w-[23rem] h-[20rem] relative overflow-hidden rounded-t-lg place-card-img">
            <img
              src="https://www.bontravelindia.com/wp-content/uploads/2021/09/Mussoorie-Hill-Station.jpg"
              alt=""
              className="w-[23] h-[25rem] object-cover transition duration-300 ease-in-out hover:scale-110 object-center overflow-hidden"
            />
          </div>

          <div className="p-3">
            <p className="overflow-y-auto overflow-hidden text-[24px] max-h-[70px] font-bold tracking-wide mb-2">
              MUSSORRIE:- THE QUEEN OF HILLS WITH A DISTANCE OF 20KM AWAY
            </p>
            <p className="h-[15rem] max-h-[400px] w-full overflow-y-auto overflow-hidden text-justify p-2">
              Mussoorie the queen of hill station is famous for its scenic
              beauty good social life and entertainment the excellent climate
              makes it an attractive holiday place thronged by holidayers it
              vibrates with gaiety and merry making during the summer season.
              Mussoorie is a scenic hill station dotted with mesmerizing
              waterfalls towering mountain peaks, and a string of colonial
              buildings.
            </p>
            <div className="flex justify-between gap-7 items-center p-4 font-semibold text-gray-700 tracking-wider">
              <img
                src={direction}
                alt="location"
                className="w-[40px] rounded-lg shadow-md bg-slate-300/20 p-1"
              />
              <a href="https://maps.app.goo.gl/JxszDckZGNrFGtWQ6">
                <p>
                  <span className="bg-[#ffae00] text-white p-2 rounded-lg font-semibold">
                    Location
                  </span>
                </p>
              </a>
            </div>
          </div>
        </div>

        <div className="w-[25rem] bg-white shadow-xl rounded-lg card flex flex-col items-center pt-3">
          <div className="w-[23rem] h-[20rem] relative overflow-hidden rounded-t-lg place-card-img">
            <img
              src={chamba}
              alt=""
              className="w-[23] h-[25rem] object-cover transition duration-300 ease-in-out hover:scale-110 object-center overflow-hidden"
            />
          </div>

          <div className="p-3">
            <p className="overflow-y-auto overflow-hidden text-[24px] max-h-[70px] font-bold tracking-wide mb-2">
              CHAMBA:- A CALM TOWM WITH PEACE AND BEAUTIFUL VIEWS JUST 35KM AWAY
              FROM OUR STAY
            </p>
            <p className="h-[15rem] max-h-[400px] w-full overflow-y-auto overflow-hidden text-justify p-2">
              Far from the rush of city life, Chamba is a small town in
              Uttarakhand that is known for pristine vistas of deodar and pine
              trees through Himalayan mountains. Promising a peaceful ambience,
              modernisation hasn't touched the borders of Chamba. A perfect
              getaway to find solace in nature, the refreshing, aromatic
              fragrance of apple and apricot orchards welcome you to the Chamba
              region.
            </p>
            <div className="flex justify-between gap-7 items-center p-4 font-semibold text-gray-700 tracking-wider">
              <img
                src={direction}
                alt="location"
                className="w-[40px] rounded-lg shadow-md bg-slate-300/20 p-1"
              />
              <a href="https://maps.app.goo.gl/J31fi44j28XD2j5PA">
                <p>
                  <span className="bg-[#ffae00] text-white p-2 rounded-lg font-semibold">
                    Location
                  </span>
                </p>
              </a>
            </div>
          </div>
        </div>

        <div className="w-[25rem] bg-white shadow-xl rounded-lg card flex flex-col items-center pt-3">
          <div className="w-[23rem] h-[20rem] relative overflow-hidden rounded-t-lg place-card-img">
            <img
              src="https://www.euttaranchal.com/tourism/photos/tehri-lake-993324.jpg"
              alt=""
              className="w-[23] h-[25rem] object-cover transition duration-300 ease-in-out hover:scale-110 object-center overflow-hidden"
            />
          </div>

          <div className="p-3">
            <p className="overflow-y-auto overflow-hidden text-[24px] max-h-[70px] font-bold tracking-wide mb-2">
              TEHRI LAKE:- THE POPULAR TEHRI LAKE WITH ADVENTURIOUS ACTIVITIES
              IS JUST 50KM AWAY.
            </p>
            <p className="h-[15rem] max-h-[400px] w-full overflow-y-auto overflow-hidden text-justify p-2">
              It is known for the popular Tehri Dam, a hydro-electric project
              centered near Tehri Town. The dam is located on the Bhagirathi
              river and is said to be the fifth-highest in the world. The nearby
              Tehri Lake is said to be one of the largest man-made lakes in
              Asia. Today, the lake is best known for adventure tourism.
              Visitors can enjoy jet skiing, hot air balloon rides, boating,
              zorbing, paragliding, hotdog ride, bandwagon boat ride, banana
              boat ride, etc.
            </p>
            <div className="flex justify-between gap-7 items-center p-4 font-semibold text-gray-700 tracking-wider">
              <img
                src={direction}
                alt="location"
                className="w-[40px] rounded-lg shadow-md bg-slate-300/20 p-1"
              />
              <a href="https://maps.app.goo.gl/iNjxoaX92cEFVzep8">
                <p>
                  <span className="bg-[#ffae00] text-white p-2 rounded-lg font-semibold">
                    Location
                  </span>
                </p>
              </a>
            </div>
          </div>
        </div>

        <div className="w-[25rem] bg-white shadow-xl rounded-lg card flex flex-col items-center pt-3">
          <div className="w-[23rem] h-[20rem] relative overflow-hidden rounded-t-lg place-card-img">
            <img
              src="https://uttarakhandtourism.gov.in/sites/default/files/2020-06/Dehradun%20banner_0.jpg"
              alt=""
              className="w-[23] h-[25rem] object-cover transition duration-300 ease-in-out hover:scale-110 object-center overflow-hidden"
            />
          </div>

          <div className="p-3">
            <p className="overflow-y-auto overflow-hidden text-[24px] max-h-[70px] font-bold tracking-wide mb-2">
              DEHRADUN:- THE VALLEY JUST 53KM AWAY IS A BEST PLACE TO SPEND YOUR
              TIME.
            </p>
            <p className="h-[15rem] max-h-[400px] w-full overflow-y-auto overflow-hidden text-justify p-2">
              Dehradun is surrounded by high mountains and lush Sal forests.
              Known for its pleasant year-round weather and scenic surroundings,
              the city is a gateway to several popular hill-stations like
              Mussoorie and pilgrimage sites like Haridwar and Rishikesh.
              Offering a blend of unparalleled landscape and modern amenities,
              bustling Dehradun is a city for both business and leisure. Once a
              retirement haven, today it buzzes with excitement, yet has managed
              to retain its laid-back vibe. Quaint cafés and lounges rub
              shoulders with heritage monuments and bazaars. Dehradun is the
              capital of the Indian state of Uttarakhand, near the Himalayan
              foothills. At its core is the 6-sided Ghanta Ghar clock tower. To
              the southwest is Paltan Bazaar, a busy shopping area. Just east is
              the Sikh temple Gurdwara Nanaksar, topped with ornate white and
              golden domes. In Clement Town to the city's southwest, Mindrolling
              Monastery is a Tibetan Buddhist center with shrine rooms in its
              Great Stupa
            </p>
            <div className="flex justify-between gap-7 items-center p-4 font-semibold text-gray-700 tracking-wider">
              <img
                src={direction}
                alt="location"
                className="w-[40px] rounded-lg shadow-md bg-slate-300/20 p-1"
              />
              <a href="https://uttarakhandtourism.gov.in/sites/default/files/2020-06/Dehradun%20banner_0.jpg">
                <p>
                  <span className="bg-[#ffae00] text-white p-2 rounded-lg font-semibold">
                    Location
                  </span>
                </p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlacesToVisit;
