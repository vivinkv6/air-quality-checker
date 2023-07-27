type aqiProps = {
  aqi: number | undefined;
};

function CurrentCondition(props: aqiProps) {
  return (
    <div className="container">
      <div className="row">
        {props.aqi == 1 && (
          <>
            <div className="col-12">
              <img
                src="https://www.aqi.in/assets/images/cartton_shape_4.webp"
                style={{ height: "20rem" }}
                alt="Not found"
              />
            </div>
            <div className="col-12">
              <h2 style={{ fontFamily: "fantasy", fontSize: "38px" }}>GOOD</h2>
            </div>
          </>
        )}
        {props.aqi == 2 && (
          <>
            <div className="col-12">
              <img
                src="https://www.aqi.in/assets/images/cartton_shape_3.webp"
                alt="Not found"
              />
            </div>
            <div className="col-12">
              <h2 style={{ fontFamily: "fantasy", fontSize: "38px" }}>MODERATE</h2>
            </div>
          </>
        )}
        {props.aqi == 3 && (
          <>
          <div className="col-12">
          <img
            src="https://www.aqi.in/assets/images/cartton_shape_2.webp"
            alt="Not found"
          />
          </div>
          <div className="col-12">
          <h2 style={{ fontFamily: "fantasy", fontSize: "38px" }}>POOR</h2>
          </div>
          </>
        )}
        {props.aqi == 4 && (
          <>
          <div className="col-12">
          <img
            src="https://www.aqi.in/assets/images/cartton_shape_5.webp
    "
            alt="Not found"
          />
          </div>
          <div className="col-12">
          <h2 style={{ fontFamily: "fantasy", fontSize: "38px" }}>UNHEALTHY</h2>
          </div>
          </>
        )}
        {props.aqi == 5 && (
          <>
           <div className="col-12">
          <img
            src="https://www.aqi.in/assets/images/cartton_shape_1.webp"
            alt="Not found"
          />
          </div>
          <div className="col-12">
          <h2 style={{ fontFamily: "fantasy", fontSize: "38px" }}>HARZARDOUS</h2>
          </div>
          </>
        )}
      </div>
    </div>
  );
}

export default CurrentCondition;
