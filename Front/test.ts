 interface ResponseData {  
    id: number;  
    name: string;  
    description: string;  
  }
const fetchData = async (): Promise<ResponseData[]> => {  
  try {  
    const response = await fetch('http://127.0.0.1:8000/admin/todos/todo/');  
    const data: ResponseData[] = await response.json();  
    return data;  
  } catch (error) {  
    console.error('Error fetching data:', error);  
    throw error;  
  }  
};  


async function main() {  
  try {  
    const data = await fetchData();  
    console.log(data);  
  } catch (error) {  
    console.error('Error:', error);  
  }  
}  

main();
