type User = {
  id: number;
  username: string;
  role: "member" | "contributor" | "admin";
};

let nextUserId = 1;

type UpdatedUser = Partial<User>;

const users: User[] = [
  { id: nextUserId++, username: "john_doe", role: "member" },
  { id: nextUserId++, username: "jane_smith", role: "contributor" },
];

function updateUser(id: number, updates: UpdatedUser) {
  const selectedUser = users.find((user) => user.id === id);
  if (!selectedUser) {
    throw new Error("Invalid id");
  }
  Object.assign(selectedUser, updates);
}

function addNewUser(newUser: Omit<User, "id">): User {
  const user: User = {
    id: nextUserId++,
    ...newUser,
  };
  users.push(user);
  return user;
}

// updateUser(1, { username: "new_john_doe" });
// updateUser(4, { role: "contributor" });

addNewUser({ username: "joe_schmoe", role: "member" });

console.log(users);
