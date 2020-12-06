db.createUser(
    {
        user: "kougi",
        pwd: "Nikolas12",
        roles: [
            {
                role: "readWrite",
                db: "testDb"
            }
        ]
    }
)