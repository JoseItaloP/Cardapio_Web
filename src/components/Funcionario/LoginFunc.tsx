export default function LoginFunc() {

    function tryLogin(e: React.FormEvent<HTMLFormElement> ){
        e.preventDefault()
    }

  return (
    <form onSubmit={(e)=>{tryLogin(e)}} className="FormLoginPage">
        <label htmlFor="">
            <h3>UserName</h3>
            <input type="text" name="" id="" />
        </label>
        <label htmlFor="">
            <h3>Password</h3>
            <input type="password" name="" id="" />
        </label>
        <input type="submit" value="Enviar" />
    </form>
  )
}
