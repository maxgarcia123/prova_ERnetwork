import React, { useState } from "react";
import '../../styles/form.css'
import api from '../../services/api'

function SignuPessoas() {
           const[name,setName] = useState('');
           const[sexo,setSexo] = useState('');
           const[cpf,setCpf] = useState('');
           const[rg,setRg] = useState('');
           const[cidade,setCidade] = useState('');
           const[data_nacimento,setData_nacimento] = useState('');
           const[codigo,setCodigo] = useState('');
           const[salario,setSalario] = useState('');
           
           
           async function handleSubimit(e) {
              e.preventDefault(); 
              const response = await api.post('./Pessoas',{
                  name,
                  sexo,
                  cpf,
                  rg,
                  cidade,
                  data_nacimento,
                  codigo,
                  salario
              })
              console.log(response.data);
           }

          return(
              <div className="container col-10 col-md-6 col-lg-4 formsigup" >

                    <div className="row">
                    
                    <div className="col-12 text-center my-5">
                        <h1 className="display-6 fonte" style={{color:"black"}}> Cadastro de pessoas</h1>
                    </div>

                    </div>

                    <div className="row mb-5">
                       <div className="col-12 ">
                         
                           <form style={{height:"800px"}} onSubmit={handleSubimit}>
                                <div className="form-row">
                                    <div className="form-group col-12">
                                        
                                        <label htmlFor="inputName" className="fonte">Nome</label>
                                        <input type="text" className="form-control" id="inputName" placeholder="nome da cidade" 
                                        required value={name} onChange={e =>setName(e.target.value)} name="name"></input>
                                    </div>
                                   
                                    <div className="form-group col-12">
                                        <label className="my-1 mr-2 fonte" htmlFor="inlineFormCustomSelectPref">Sexo</label>
                                        <select className="custom-select my-1 mr-sm-2" id="inlineFormCustomSelectPref"  
                                         value={sexo} onChange={e =>setSexo(e.target.value)}>
                                            <option selected>-</option>
                                            <option value="masculino">Masculino</option>
                                            <option value="feminino">Feminino</option>
                                        </select>
                                     </div>
                                    <div className="form-group col-12">
                                            <label htmlFor="inputCodigo3" className="fonte">Codigo</label>
                                            <input type="number" className="form-control" placeholder="Codigo" 
                                             required value={codigo} onChange={e =>setCodigo(e.target.value)} name="codigo"></input>
                                    </div>

                                    <div className="form-group col-12">
                                            <label htmlFor="inputCodigo3" className="fonte">Cpf</label>
                                            <input type="number" className="form-control" placeholder="Cpf" 
                                             required value={cpf} onChange={e =>setCpf(e.target.value)} name="cpf"></input>
                                    </div>

                                    <div className="form-group col-12">
                                            <label htmlFor="inputRg" className="fonte">RG</label>
                                            <input type="number" className="form-control" placeholder="RG" 
                                             required value={rg} onChange={e =>setRg(e.target.value)} name="rg"></input>
                                    </div>

                                    <div className="form-group col-12">
                                            <label htmlFor="inputCodigo3" className="fonte">Cidade</label>
                                            <input type="text" className="form-control" placeholder="Cidade" 
                                             required value={cidade} onChange={e =>setCidade(e.target.value)} name="cidade"></input>
                                    </div>
                                    <div className="form-group col-12">
                                            <label htmlFor="inputCodigo3" className="fonte">Data nacimento</label>
                                            <input type="date" className="form-control" placeholder="Data nacimento" 
                                             required value={data_nacimento} onChange={e =>setData_nacimento(e.target.value)} name="data_nacimento"></input>
                                    </div>
                                    <div className="form-group col-12">
                                            <label htmlFor="inputCodigo3" className="fonte">Salario</label>
                                            <input type="number" className="form-control" placeholder="Salario" 
                                             required value={salario} onChange={e =>setSalario(e.target.value)} name="salario"></input>
                                    </div>
                                </div>  
                                <button type="submit" className="btn btn-primary">Cadastrar</button>
                                </form>

                       </div> 
                    </div>
              </div>
              
          )
      }
    
export default SignuPessoas;