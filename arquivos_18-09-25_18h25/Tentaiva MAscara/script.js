



 function mascara_cpf()
 {

    let cpf = document.getElementById("inpCPF").value


    cpf = cpf.slice(0,14)

    if(cpf[3]!=".")
    {
       if(cpf[3] != undefined){

        document.getElementById("inpCPF").value = cpf.slice(0,3) + "." + cpf[3]
       }
    }

    if(cpf[7]!=".")
        {
           if(cpf[7] != undefined){
    
            document.getElementById("inpCPF").value = cpf.slice(0,7) + "." + cpf[7]
           }
        }

        if(cpf[11]!="-")
            {
               if(cpf[11] != undefined){
        
                document.getElementById("inpCPF").value = cpf.slice(0,11) + "-" + cpf[11]
               }
            }
    
    
    console.log(cpf)


 }

 function mascara_num()
 {

    let num = document.getElementById("inpNUM").value

    if(num[0]!="(")
    {
       if(num[0] != undefined){

        document.getElementById("inpNUM").value = num.slice(0,0) + "(" + num[0]
       }
    }

    if(num[3]!=")")
        {
           if(num[3] != undefined){
    
            document.getElementById("inpNUM").value = num.slice(0,3) + ")" + num[3]
      
           }
        }

        
    if(num[5]!=" ")
      {
         if(num[5] != undefined){
  
          document.getElementById("inpNUM").value = num.slice(0,5) + " " + num[5]
         }
      }

       

        if(num[10]!=" ")
            {
               if(num[10] != undefined){
        
                document.getElementById("inpNUM").value = num.slice(0,10) + " " + num[10]
               }
            }


        
    
    
    console.log(num)

        }


        function mascara_cep()
        {
       
           let num = document.getElementById("inpCEP").value
       
           if(num[2]!=".")
           {
              if(num[2] != undefined){
       
               document.getElementById("inpCEP").value = num.slice(0,2) + "." + num[2]
              }
           }
       
           if(num[6]!=".")
               {
                  if(num[6] != undefined){
           
                   document.getElementById("inpCEP").value = num.slice(0,6) + "." + num[6]
             
                  }
               }
       
               
       
              
       
               if(num[10]!=".")
                   {
                      if(num[10] != undefined){
               
                       document.getElementById("inpCEP").value = num.slice(0,10) + "." + num[10]
                      }
                   }
       
       
               
           
           
           console.log(num)
       
               }


               function mascara_cnpj()
               {
              
                  let num = document.getElementById("inpCNPJ").value
              
                  if(num[2]!=".")
                  {
                     if(num[2] != undefined){
              
                      document.getElementById("inpCNPJ").value = num.slice(0,2) + "." + num[2]
                     }
                  }
              
                  if(num[6]!=".")
                      {
                         if(num[6] != undefined){
                  
                          document.getElementById("inpCNPJ").value = num.slice(0,6) + "." + num[6]
                    
                         }
                      }
              
                      
              
                     
              
                      if(num[10]!="/")
                          {
                             if(num[10] != undefined){
                      
                              document.getElementById("inpCNPJ").value = num.slice(0,10) + "/" + num[10]
                             }
                          }

                          if(num[14]!="-")
                           {
                              if(num[14] != undefined){
                       
                               document.getElementById("inpCNPJ").value = num.slice(0,14) + "-" + num[14]
                              }
                           }
              
              
                      
                  
                  
                  console.log(num)
              
                      }


                       function mascara_cod()
               {
              
                  let num = document.getElementById("inpCOD").value
              
                  if(num[2]!="_")
                  {
                     if(num[2] != undefined){
              
                      document.getElementById("inpCOD").value = num.slice(0,2) + "_" + num[2]
                     }
                  }
              
                  if(num[5]!="/")
                      {
                         if(num[5] != undefined){
                  
                          document.getElementById("inpCOD").value = num.slice(0,5) + "/" + num[5]
                    
                         }
                      }
              
                      if(num[6]!="/")
                          {
                             if(num[6] != undefined){
                      
                              document.getElementById("inpCOD").value = num.slice(0,6) + "/" + num[6]
                             }
                          }

                          if(num[10]!="-")
                           {
                              if(num[10] != undefined){
                       
                               document.getElementById("inpCOD").value = num.slice(0,10) + "-" + num[10]
                              }
                           }

                           if(num[13]!=".")
                           {
                              if(num[13] != undefined){
                       
                               document.getElementById("inpCOD").value = num.slice(0,13) + "." + num[13]
                              }
                           }

                             if(num[15]!=".")
                           {
                              if(num[15] != undefined){
                       
                               document.getElementById("inpCOD").value = num.slice(0,15) + "." + num[15]
                              }
                           }
              
              
                      
                  
                  
                  console.log(num)
              
                      }


                      function alerta(){
                        alert("Formulario enviado com sucesso!")
                      }