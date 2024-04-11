import  './login.css'

export default function Login() {
  return (
    <div id="root">
      <form
        className="p-4"
        style={{
          background:
            "url(https://images.unsplash.com/photo-1600303881706-b8a373dc73c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email address
          </label>
          <input type="email" className="form-control" id="email" />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input type="password" className="form-control" id="password" />
        </div>
        <button type="submit" className="btn">
          Submit
        </button>
      </form>
    </div>
  );
}