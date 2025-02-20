import { Pool } from "pg";

const userSchema = async () => {
  try {
    await Pool.query(
        `CREATE TYPE roles AS ENUM('Subscriber','Instructor','Admin');
      
        CREATE TABLE IF NOT EXISTS users ( 
            id SERIAL NOT NULL PRIMARY KEY, 
            name VARCHAR(100) NOT NULL, 
            email VARCHAR(100) UNIQUE NOT NULL, 
            password VARCHAR(100) NOT NULL,
            picture  VARCHAR(100), 
            role roles[] DEFAULT 'Subscriber',
            stripe_account_id INT,
            stripe_seller JSONB,
            stripeSession JSONB,
            created_at TIMESTAMPTZ DEFAULT NOW() ,
            updated_at timestamp default now() on update now()
        );
        `
    );

  
    console.log("user schema created...");
  } catch (error) {
    console.error("user schema creation caused an error \n", error);
  } finally {

  }

};

export default












  /*
    
  
  
  name :{
    type : String,
    trim : true,
    required : true,
},
email : {
    type : String,
    trim : true,
    required : true,
    unique : true,
},
password : {
    type : String,
    required : true,
    min : 6,
    max : 64,
},
picture : {
    type  : String,
    default : "/avatar.png",
},
role : {
    type : [String],
    dafault : ["Subscriber"],
    enum : ["Subscriber", "Instructor", "Admin"],
},
stripe_account_id = "",
stripe_seller: {},
stripeSession : {},
), timestamp(); 

*/