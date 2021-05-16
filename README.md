**Title**
----
  <_Additional information about your API call. Try to use verbs that match both request type (fetching vs modifying) and plurality (one vs multiple)._>

* **Start**


```bash
# Clonando repositório
$ git clone https://github.com/BrunoSSantana/test-backend-nodejs.git

# Entrando na pasta
$ cd test-backend-nodejs

# Instalando dependências
$ yarn

# Executando a aplicação em modo de desenvolvimento
$ yarn dev

# Inciando na porta:3333
acesse <http://localhost:3333>
```


* **Method:**
  
  <_The request type_>

  `GET` | `POST` 
  
*  **Rotas**

        POST/ => Create new Product

      **Required:**
      
      Body:
    ```JSON
    {
      "title": "string",
      "description": "string",
      "price": "number",
      "category": "string",
      "user": "string"
    }
    ```
    **Example Return**
    ```JSON
    [
        {
          "id": "8b785fcb-9431-45fd-85f9-9b60f051619c",
          "title": "requeijão",
          "description": "requeijão de queijo qualho",
          "price": 0,
          "user": "Ana",
          "category": "food",
          "created_at": "2021-05-16T14:19:37.461Z"
        }
    ]
    ```
    ---
        
        GET/ => Find all Products
            
      _No params return all products_
      
    ---

      

        GET/:user => Find prodcts with of user

      **Required:**
      
      Params:

      localhost/users/:user

    **Example Return**
    ```JSON
    [
        {
          "id": "8b785fcb-9431-45fd-85f9-9b60f051619c",
          "title": "requeijão",
          "description": "requeijão de queijo qualho",
          "price": 0,
          "user": "João",
          "category": "food",
          "created_at": "2021-05-16T14:19:37.461Z"
        }
    ]
    ```