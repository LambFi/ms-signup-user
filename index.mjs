import { Costumer } from "./schema.mjs";
import { CreateResponse, EncryptPassword } from "./global.mjs";

export const handler = async ( event ) => {

    const Event = event.body;
    console.log("Paramters received: ", event);

    ///Verify if body is broked
    if(!Event){

        return CreateResponse( false, "body_broked", 404, "User may have sent invalid parameters." );

    }

    ///Do it safe parse to create a user
    if( !Costumer.safeParse( Event ).success ){

        return CreateResponse( 404, false, "schema_failed", "Something went wrong when the user provided the data.");

    }

    ///const PasswordEncrypted = await EncryptPassword( Event.password );


}

