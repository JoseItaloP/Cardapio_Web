import LoginFunc from "../../components/Funcionario/LoginFunc";
import MainFunc from "../../components/Funcionario/MainFunc/MainFunc";
import './AppFuncionarios.css'


export default function Login() {
  return (
    <MainFunc>
      <section className="BodyLoginPage">
        <h1>Login de funcionarios</h1>
          <LoginFunc/>
      </section>
    </MainFunc>
  )
}
