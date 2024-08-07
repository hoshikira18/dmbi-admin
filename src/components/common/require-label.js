const RequireLabel = ({ label, required = false }) => {
    return (
        <label>
            {label}
            {required && <span className="text-red-500">*</span>}
        </label>
    );
};

export default RequireLabel;
