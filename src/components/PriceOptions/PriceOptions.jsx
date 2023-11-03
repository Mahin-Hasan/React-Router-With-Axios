import PriceOption from "../PriceOption/PriceOption";

const PriceOptions = () => {
    const PriceOptions = [
        {
            "id": 1,
            "name": "Starter",
            "price": "$19",
            "features": [
                "Access to cardio equipment",
                "Limited access to weightlifting area",
                "Two complimentary personal trainer sessions per month",
                "Discounts on protein shakes and bars",
                "Access to gym during off-peak hours"
            ]
        },
        {
            "id": 2,
            "name": "Basic",
            "price": "$29",
            "features": [
                "Access to cardio equipment",
                "Limited access to weightlifting area",
                "Three complimentary personal trainer sessions per month",
                "Access to selected group classes",
                "Discounts on merchandise in the gym shop"
            ]
        },
        {
            "id": 3,
            "name": "Standard",
            "price": "$49",
            "features": [
                "Access to cardio equipment",
                "Full access to weightlifting area",
                "Five complimentary personal trainer sessions per month",
                "Access to all group classes",
                "Access to sauna and spa facilities"
            ]
        },
        {
            "id": 4,
            "name": "Premium",
            "price": "$79",
            "features": [
                "Access to cardio equipment",
                "Full access to weightlifting area",
                "Unlimited group classes",
                "Access to sauna and spa facilities",
                "Unlimited personal trainer sessions per month"
            ]
        },
        {
            "id": 5,
            "name": "Family",
            "price": "$129",
            "features": [
                "Access to cardio equipment",
                "Full access to weightlifting area",
                "Unlimited group classes for the entire family",
                "Discounts on family packages"
            ]
        }
    ]

    return (
        <div className="m-12">
            <h2 className="text-5xl">Best Prices</h2>
            <div className="grid md:grid-cols-3 gap-6">
                {
                    PriceOptions.map(option => <PriceOption key={option.id} option={option}></PriceOption>)
                }
            </div>
        </div>
    );
};

export default PriceOptions;