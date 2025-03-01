import StarIcon from '@mui/icons-material/Star';

const FormInput = ({
    className,
    type,
    placeholder,
    name,
    required,
    onChange,
    children,
}) => {

    const handleChange = (e) => {
        const value = e.target.value;

        if (name.startsWith("Player") && value && !value.startsWith("https://www.faceit.com/")) {
            e.target.setCustomValidity("Link mora kreniti sa https://www.faceit.com/");
        } else {
            e.target.setCustomValidity("");
        }

        if (onChange) {
            onChange(e);
        }
    };

    return (
        <div className='bg-[#181818] rounded px-1 flex items-center'>
            <input
                className={`${className} bg-[#181818] w-[30rem] h-14 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-[#8D151F]`}
                type={type || "text"}
                placeholder={placeholder}
                name={name}
                required={required}
                onChange={handleChange}
            />
            <div className='flex flex-col items-center justify-center'>
                <div className='absolute mr-8'>
                    {children}
                </div>
            </div>
        </div>
    );
};


export default FormInput