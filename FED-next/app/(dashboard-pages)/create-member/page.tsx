// "use client";
import { SuccessCard } from "@/components/custom/cards/success-card";
import RegistrationForm from "@/components/custom/Forms/CreateMemberForm";
// import React, { useState } from "react";

const CreateMemeber = () => {
  // const [visible, setVisible] = useState(true);

  return (
    <>
      <RegistrationForm />

      {/* {visible && (
        <SuccessCard
          title="Profile Updated!"
          message="Your profile information has been successfully saved."
          onClose={() => setVisible(false)}
        />
      )} */}
    </>
  );
};

export default CreateMemeber;
