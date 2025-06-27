import bcrypt from "bcryptjs";

export function CreateResponse( Code, Success, Status, Message, Data ){

    const Object = {
        code: Code,
        success: Success,
        status: Status,
        message: Message
    }

    if(Success){

        Object.data = JSON.stringify( Data )

    }

    return Object;

}

export async function EncryptPassword( Password ){
    
    try {

        const SaltRounds = 10;
        const Salt = await bcrypt.genSalt(SaltRounds);

        const Hash = await bcrypt.hash( Password, Salt );
        console.log("hashing: ", Hash);

        return Hash;

    }catch(Err){

        console.log("Error bcrypt: ", Err);
        return Err;

    }
}