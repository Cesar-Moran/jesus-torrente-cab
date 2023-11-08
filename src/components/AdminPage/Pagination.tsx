import { useState } from "react";
import { Button } from "../ui/button";
import { RefreshCcw, Search } from "lucide-react";

const Pagination = ({ setRegisteredUsers }: any) => {
  const [currentPage, setCurrentPage] = useState(0);
  // Stores the look for an id input value
  const [inputValue, setInputValue] = useState("");
  const [maximumUsersFound, setMaximumUsersFound] = useState(false);

  const handleNextPageChange = async () => {
    try {
      // Pages that will skip, (i + 5 each time the button is clicked)
      const nextPage = currentPage + 5;

      // Fetchs the users with the skipped users and displays only 5 users
      const response = await fetch(
        `http://localhost:4000/pagination?skip=${nextPage}&take=5`
      );
      if (response.ok) {
        // If the response was ok, parse the data
        const data = await response.json();
        // If there's users left, let the user paginate
        if (data.length > 0) {
          // Actualiza el estado de registeredUsers en AdminPage
          // Updates the registeredUsers state on AdminPage.tsx
          setRegisteredUsers(data);
          setCurrentPage(nextPage);
          setMaximumUsersFound(false);
        } else {
          /* Else, set the maximum users found to true*/
          setMaximumUsersFound(true);
        }
      } else {
        // If response was not ok, throw an error
        throw new Error("Failed to fetch dealer requests");
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handlePrevPageChange = async () => {
    // Does the same that the next page but with previous pagination
    try {
      // Calcules the next page subtracting 5 to the current page (if currentPage is 10, then subtracts 5 and show the 5 previus ones)
      const nextPage = currentPage - 5;
      // If nextPage is greather than 0, assign the value of nextPage to this variable, else, set this value to 0
      // to prevent a negative page value
      const newPage = nextPage > 0 ? nextPage : 0;

      const response = await fetch(
        // Fetches the previous page (pagination?skip={newPage} tells the server to skip the subtracted value )
        // (&take=5) tells the server to take only 5 users
        `http://localhost:4000/pagination?skip=${newPage}&take=5`
      );
      if (response.ok) {
        // If the response was ok, parse the response and store it in this variable
        const data = await response.json();
        // Updates the registeredUsers state on AdminPage.tsx with the new data (previous users)
        setRegisteredUsers(data);
        // Se
        setCurrentPage(newPage);
        setMaximumUsersFound(false);
      } else {
        throw new Error("Failed to fetch dealer requests");
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleInputChange = (ev: any) => {
    setInputValue(ev.target.value);
  };

  const handlePageSpecificId = async () => {
    const response = await fetch(
      `http://localhost:4000/getSpecificId/${inputValue}`
    );
    if (response.ok) {
      const data = await response.json();

      if (Array.isArray(data)) {
        setRegisteredUsers(data);
      } else if (data.id) {
        // Si data no es un arreglo pero contiene un usuario, colócalo en un arreglo
        setRegisteredUsers([data]);
      } else {
        // Maneja cualquier otro caso de error
        console.log("Usuario no encontrado");
        setRegisteredUsers([]); // Puedes establecer un arreglo vacío o mostrar un mensaje de error
      }
    }
  };
  return (
    <div className="flex flex-col  mx-4">
      <div className="flex items-center justify-between my-4 ">
        <Button
          className="bg-red-500 hover:bg-red-900"
          onClick={() => handlePrevPageChange()}
        >
          Prev Page
        </Button>
        <div className="flex items-center gap-3">
          <input
            type="number"
            className="p-2 px-4 border rounded-lg"
            placeholder="Look for an specific ID"
            onChange={handleInputChange}
            value={inputValue}
          />

          <button onClick={handlePageSpecificId} className="relative -left-11">
            <Search size={18} />
          </button>
        </div>
        <Button
          className="bg-red-500 hover:bg-red-900"
          onClick={() => handleNextPageChange()}
        >
          Next Page
        </Button>
      </div>
      <p>{maximumUsersFound ? "There are no users left to show!" : ""}</p>
    </div>
  );
};

export default Pagination;
