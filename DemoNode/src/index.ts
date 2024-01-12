import  FileSystem from "FileSystem";

interface DetailType{
    name:string;
    company:string;
}

const FILE_PATH = "./dist/data.json";
const intailValue:DetailType[]=[
    {name:"khushiram jaat",company:"Wisflux Private limited"},
];

enum FILE_MODE{
    READ='r',
    WRITE="w",
    APPEND = "a",
}

const checkFileExists = async (file:string): Promise<Boolean> =>{
    try{
        await FileSystem.promises.access(file,FileSystem.constant._F_OK);
        return true;
    } catch(e){
        return false;
    }
}

async function fillIntailDataFileNotExist():Promise<void> {
    FileSystem.appendFile(FILE_PATH,JSON.stringify(intailValue),(err) =>{
        console.log(err);
    })
    return;
}

async function main() {
    const isFileExist = await checkFileExists(FILE_PATH);
    if(isFileExist){
        FileSystem.readFileSync(FILE_PATH,"utf-8",(err,data: string)=>{
            if(err){
                console.log(err);
            }
            const newDetail:DetailType ={
                name:"K",
                company:"Wisflux",
            };

            const parseData = JSON.parse(data);
            const appendData =[...parseData,newDetail];

            FileSystem.writeFileSync(FILE_PATH,JSON.stringify(appendData),(err)=>{
                console.log(err);
            })
        })
    }else{
        fillIntailDataFileNotExist();
    }
}

main();