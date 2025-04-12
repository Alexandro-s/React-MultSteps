const UserForm = ({data, updateFieldHandler}) => {
    return <div>

        {/* Campo de input para o nome  */}
        <div className="form-control">
            <label>Name:</label>
            <input type="text"
                name="name"
                id="name"
                placeholder="Enter your name"
                required
                value={data.name || ""}
                onChange={(e) => updateFieldHandler("name", e.target.value)}
            />
        </div>


       {/*Campo de input para o email  */}
        <div className="form-control">
            <label htmlFor="">Email</label>
            <input type="email"
                name="email"
                id="email"
                placeholder="enter your email"
                required
                value={data.email || ""}
                onChange={((e) => updateFieldHandler("email", e.target.value))}

            />
        </div>
    </div>
}

export default UserForm