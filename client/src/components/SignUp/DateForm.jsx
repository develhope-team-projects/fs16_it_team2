import { useState } from "react";

const DateForm = () => {
  const [birthdate, setBirthdate] = useState("");

  const handleDateChange = (e) => {
    setBirthdate(e.target.value);
  };

  //Calcola l'età
  const today = new Date();
  const userBirthdate = new Date(birthdate);
  const age = today.getFullYear() - userBirthdate.getFullYear();

  //Verifica l'età
  if (age < 18) {
    alert("Devi avere almeno 18 anni per registrarti!");
  }

  return (
    <div className="py-3 border-white border-b-3">
      <div className="flex flex-col gap-1 mb-3">
        <label className="text-xl">Birthdate</label>
        <MyDatePicker value={birthdate} onChange={handleDateChange} />
      </div>
    </div>
  );
};

const MyDatePicker = ({ value, onChange }) => {
  return (
    <div className="relative">
      <input
        className="p-2 bg-transparent border-2 border-white shadow-lg w-80 rounded-xl"
        placeholder="DD-MM-YYYY"
        type="date"
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default DateForm;
