import EditPencil from "assets/svg/components/EditPencil";
import { Link } from "react-router-dom";

const AccountInformation = () => {
  return (
    <div className="">
      <div className="account_info_header">
        <p className="text-lg uppercase font-OG-Bold text-lightTextColor border-b-[1px] pb-2 mb-3">
          Contact Information
        </p>
      </div>
      <div className="contact_information">
        <div className="user_name_emali_container">
          <p className="text-sm text-lightTextColor font-OG-Regular">
            Somnath Tiwari
          </p>
          <p className="text-sm email_para font-OG-Regular text-lightTextColor">
            somnath.tiwari@outdoorgoats.com
          </p>
        </div>
        <div className="flex flex-row items-center gap-5 my-3">
          <Link
            to={"../account-information-edit"}
            className="flex flex-row items-center gap-1 hover:cursor-pointer"
          >
            <EditPencil className="text-base stroke-lightTextColor" />

            <p className="text-sm uppercase font-OG-Regular text-lightTextColor">
              Edit
            </p>
          </Link>
          <Link
            to={"../account-information-edit"}
            state={{ changePassword: true,changeEmail:true }}
            className="flex flex-row items-center gap-1 hover:cursor-pointer"
          >
            <EditPencil className="text-base stroke-lightTextColor" />

            <p className="text-sm uppercase font-OG-Regular text-lightTextColor">
              Change Password and Email
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AccountInformation;
