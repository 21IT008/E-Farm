import Wheat from '../../assets/images/Categories/1.jpeg';
import rice from '../../assets/images/Categories/2.jpeg';
import Corn from '../../assets/images/Categories/3.jpeg';
import Bajri from '../../assets/images/Categories/4.jpeg';
import Peanut from '../../assets/images/Categories/5.jpeg';
import Jower from '../../assets/images/Categories/6.jpeg';
import veg from '../../assets/images/Categories/7.jpeg';
import Fruits from '../../assets/images/Categories/8.jpeg';
import Pulses from '../../assets/images/Categories/9.jpeg';
import { Link } from 'react-router-dom';

const catNav = [
    {
        name: "Grains",
        icon: Wheat,
    },
    {
        name: "Vegetables",
        icon: veg,
    },
    {
        name: "Fruits",
        icon: Fruits,
    },
    {
        name: "Pulses",
        icon: Pulses,
    },
]

const Categories = () => {
    return (
        <section className="hidden sm:block bg-white mt-10 mb-4 min-w-full px-12 py-1 shadow overflow-hidden">

            <div className="flex items-center justify-center gap-20 mt-4">

                {catNav.map((item, i) => (
                    <Link to={`/products?category=${item.name}`} className="flex flex-col gap-1 items-center p-2 group" key={i}>
                        <div className="img_11 h-16 w-16">
                            <img draggable="false" className="h-full w-full object-contain" src={item.icon} alt={item.name} />
                        </div>
                        <span className="text-sm text-gray-800 font-medium group-hover:text-primary-blue">{item.name}</span>
                    </Link>
                ))}

            </div>
        </section>
    );
};

export default Categories;
