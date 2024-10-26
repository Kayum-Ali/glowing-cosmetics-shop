
import propTypes from 'prop-types'
const Slider1 = ({name}) => {
    return (
        <div>
            <p className="lg:text-2xl md:text-2xl text-base lg:w-1/2 md:w-2/3 mx-auto w-2/3">{name}</p>
            
        </div>
    );
};

Slider1.propTypes = {
    name: propTypes.string.isRequired,
};
export default Slider1;