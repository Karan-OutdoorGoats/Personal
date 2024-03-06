import React from "react";
import WishlistItem from "./components/wishlist-item";
import { useWishlist } from "./wishlist.hooks";
import OGButton from "components/Button/OGButton";
import SelectDropdown from "components/SelectDropdown/SelectDropdown";

const WishlistPage = () => {
  const { data } = useWishlist();

  const [perPage, setPerPage] = React.useState<{
    value: number | string;
    label: number | string;
  }>({
    value: 10,
    label: 10,
  });

  return (
    <div className="bg-white">
      <div className="border-[1px] mt-3 px-2 py-2 sm:px-5 sm:py-4">
        <div className="grid w-full gap-3 sm:grid-cols-4">
          {data.map((item, index) => {
            return <WishlistItem item={item} index={index} />;
          })}
        </div>
      </div>

      <div className="flex flex-row gap-3 my-3 wistlist_add_delete_btn">
        <div>
          <OGButton
            className="text-xs rounded-sm hover:bg-primaryColor hover:text-white h-[40px] uppercase px-4 font-OG-Medium text-primaryColor border-[1.2px] border-primaryColor"
            title="Add all to cart"
          />
        </div>
        <div>
          <OGButton
            className="text-xs rounded-sm hover:bg-primaryColor hover:text-white h-[40px] uppercase px-4 font-OG-Medium text-primaryColor border-[1.2px] border-primaryColor"
            title="Delete All from Wishlist"
          />
        </div>
      </div>

      <div className="flex flex-row items-center justify-between mt-3">
        <div>
          <p className="text-s font-OG-Regular text-lightTextColor">
            {data.length} Item(s)
          </p>
        </div>

        <div className="flex flex-row items-center gap-2">
          <p className="text-s font-OG-Regular text-lightTextColor">Show</p>
          <SelectDropdown
            onChange={(e) => setPerPage(e as any)}
            value={perPage}
            id="wishlist_limit"
            options={[
              {
                value: "10",
                label: "10",
              },
              {
                value: "20",
                label: "20",
              },
              {
                value: "50",
                label: "50",
              },
            ]}
            className="font-OG-Regular text-s"
          />
          <p className="text-s font-OG-Regular text-lightTextColor">per page</p>
        </div>
      </div>
    </div>
  );
};

export default WishlistPage;
