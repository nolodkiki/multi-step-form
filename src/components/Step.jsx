const Step = () => {
    return (
            <>
            <div className="mx-auto w-80 rounded-xl bg-white p-5 shadow-xl z-30">
                <div className="pb-3 text-2xl font-bold text-blue-100">Personal info</div>
                <div className="pb-3 text-gray-100">Please provide your name, email address, and phone number.</div>
                <div className="nameInput pb-3">
                    <div className="text-xs">Name</div>
                    <input className="w-full rounded border border-solid border-gray-200 py-2 px-3 font-medium" type="text" placeholder="e.g. Stephen King" />
                </div>
                <div className="EmailInput pb-3">
                    <div className="name text-xs">Email Address</div>
                    <input className="w-full rounded border border-solid border-gray-200 py-2 px-3 font-medium" type="text" placeholder="e.g. stephenking@lorem.com" />
                </div>
                <div className="PhoneInput pb-3">
                    <div className="name text-xs">Phone Number</div>
                    <input className="w-full rounded border border-solid border-gray-200 py-2 px-3 font-medium" type="text" placeholder="e.g. +1 234 567 890" />
                </div>
            </div>
            
        </>
    )
}

export default Step