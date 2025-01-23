import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"


  const users =[
    { "id": "eb1b5f79-dc2b-4bfc-8f5c-c7b203b4f783", "fullname": "Rohan Nepal", "address": "Kathmandu", "email": "rohan@example.com", "contact": "9841234567" },
    { "id": "6c9a1e9f-48b6-4359-9dc1-19d7f6c42e0f", "fullname": "Sujan Shrestha", "address": "Pokhara", "email": "sujan@example.com", "contact": "9856781234" },
    { "id": "24b18c54-2a9e-4e6d-a90b-0c4b9f2e254f", "fullname": "Anjali Tamang", "address": "Butwal", "email": "anjali@example.com", "contact": "9845678901" },
    { "id": "97c3d6b7-fd56-4b94-b823-aba08fb9bba2", "fullname": "Bishal Gurung", "address": "Chitwan", "email": "bishal@example.com", "contact": "9812345678" },
    { "id": "f4d9a7b2-75dc-49d8-bc5a-ff5d73fd23be", "fullname": "Sneha Basnet", "address": "Bhaktapur", "email": "sneha@example.com", "contact": "9808765432" },
    { "id": "fa7bc5d9-0a22-4bb1-a6a1-9a6c52d7a713", "fullname": "Kiran Khadka", "address": "Biratnagar", "email": "kiran@example.com", "contact": "9843123456" },
    { "id": "b42edcc5-e303-4e88-8443-78721f458ac4", "fullname": "Pooja Sharma", "address": "Lalitpur", "email": "pooja@example.com", "contact": "9865432109" },
    { "id": "1ad4aaf7-0d3d-498d-9213-9467ebef9d2c", "fullname": "Prakash Thapa", "address": "Dharan", "email": "prakash@example.com", "contact": "9821234567" },
    { "id": "87e90b2c-a8d1-4b98-9b42-d11b53f5d9b0", "fullname": "Alisha Rai", "address": "Ilam", "email": "alisha@example.com", "contact": "9801122334" },
    { "id": "54e27bd1-683d-4ea8-a88a-cc6b8e8d4567", "fullname": "Ramesh KC", "address": "Dang", "email": "ramesh@example.com", "contact": "9815674321" }
  ]
  

export default function UserCard(){


return (
    <Table>
    
    <TableHeader>
      <TableRow>
        <TableHead className="w-[300px]">Fullname</TableHead>
        <TableHead>Address</TableHead>
        <TableHead>
            Email
        </TableHead>
        <TableHead className="">Contact</TableHead>
      </TableRow>
    </TableHeader>
    <TableBody>
      {users.map((user) => (
        <TableRow key={user.id}>
          <TableCell className="font-medium">{user.fullname}</TableCell>
          <TableCell>{user.address}</TableCell>
          <TableCell>{user.email}</TableCell>
          <TableCell className="">{user.contact}</TableCell>
          

        </TableRow>
      ))}
    </TableBody>
 
  </Table>



)


}




