db.createUser(
    {
        user: "kougi",
        pwd: "testPwd",
        roles: [
            {
                role: "readWrite",
                db: "testDb"
            }
        ]
    }
)
