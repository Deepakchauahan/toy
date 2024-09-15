import InputField from "./common/Input";

const CheckoutData = () => {
  return (
    <div className="checkout-data">
      <form className="sign-up">
        <InputField label="Email address" type={"email"} placeholder={"Enter email address"}/>
        <InputField label="Re enter email address" type={"email"} placeholder={"Re enter email address"}/>
        <InputField label="Enter password" type={"password"} placeholder={"Enter password"}/>
        <InputField label="Re enter password" type={"password"} placeholder={"Re enter password"}/>
        <button className="button-bg" type="submit">Submit</button>
      </form>
      <form className="address">
        <InputField label="Name" type={"text"} placeholder={"Enter your name"}/>
        <InputField label="Email address" type={"email"} placeholder={"Enter email address"} readonly={true}/>
        <InputField label="Phone number" type={"number"} placeholder={"Mobile number"}/>
        <InputField label="House No, Street Address" type={"text"} placeholder={"House No"}/>
        <InputField label="Sector, village" type={"text"} placeholder={"Sector"}/>
        <InputField label="Landmark (Optional)" type={"text"} placeholder={"Landmark"}/>
        <InputField label="State" type={"text"} placeholder={"State"}/>
        <InputField label="Zip Code" type={"text"} placeholder={"Zip code"}/>

      
        <button className="button-bg" type="submit">Continue</button>
      </form>
    </div>
  );
};

export default CheckoutData;
