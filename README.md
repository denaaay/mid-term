# Mid Term - Tokopedia Copy

## How to run project

* Buka file .env dan ubah nama database yang akan di buat di mongodb Anda.
* Setelah itu Anda dapat langsung run project dengan :
    ```
    npm start
    ```
* Server akan berjalan pada url :
    ```
    http://localhost:3000/api/
    ```
* Silakan melakukan registrasi akun terlebih dahulu melalui endpoint :
    ```
    http://localhost:3000/api/register
    ```

## Dokumentasi :

* Untuk dokumentasi melalui postman dapat dilihat melalui link berikut :
    ```
    https://documenter.getpostman.com/view/24743050/2s9XxsUw2j
    ```

## Database Structure

* User
    ```
    {
        "_id": ObjectId,
        "username": String,
        "password": String,
    }
    ```

* Video
    ```
    {
        "_id": ObjectId,
        "url": String,
    }
    ```

* Product
    ```
    {
        "_id": ObjectId,
        "title": String,
        "price": Number,
        "link": String,
        "video": ObjectId,
    }
    ```

* Comment
    ```
    {
        "_id": ObjectId,
        "comment": String,
        "user": ObjectId,
        "video": ObjectId,
        "createdAt": Date,
        "updatedAt": Date,
    }
    ```

## API Structure

### Auth

#### * /register - Post

* Deskripsi : Endpoint untuk register atau mendaftar akun ke aplikasi
* Request Body :
    ```
    {
        "username": "admin",
        "password": "admin"
    }
    ```
* Response :
    ```
    {
        "status_code": 201,
        "message": "success creating user",
        "data": {
            "username": "admin",
            "password": "admin",
            "_id": "64c3382e4381a2ce0aa64955",
            "__v": 0
        }
    }
    ```

#### * /login - Post

* Deskripsi : Endpoint untuk login dan masuk ke aplikasi
* Request Body :
    ```
    {
        "username": "admin",
        "password": "admin"
    }
    ```
* Response :
    ```
    {
        "status_code": 200,
        "message": "login success"
    }
    ```

#### * /logout - Post

* Deskripsi : Endpoint untuk logout atau keluar aplikasi
* Response :
    ```
    {
        "status_code": 200,
        "message": "logout success"
    }
    ```

### User

#### * /user - Get

* Deskripsi : Endpoint untuk mendapatkan semua data user
* Response :
    ```
    {
        "status_code": 200,
        "message": "success getting all users",
        "data": [
            {
                "_id": "64c2b7ba7c1eb8eb3b97a570",
                "username": "admin"
            },
            {
                "_id": "64c2bf28241ee655eec823f8",
                "username": "admin2"
            },
        ]
    }
    ```

#### * /user/:id - Get

* Deskripsi : Endpoint untuk mendapatkan data user berdasar id milik user
* Parameter :
    ```
    http://localhost:3000/api/user/64c2b7ba7c1eb8eb3b97a570
    ```
* Response :
    ```
    {
        "status_code": 200,
        "message": "success getting user by id",
        "data": {
            "_id": "64c2b7ba7c1eb8eb3b97a570",
            "username": "admin"
        }
    }
    ```

#### * /user/:id - Delete

* Deskripsi : Endpoint untuk delete user atau menghapus akun user dari aplikasi
* Parameter :
    ```
    http://localhost:3000/api/user/64c2bf28241ee655eec823f8
    ```
* Response :
    ```
    {
        "status_code": 200,
        "message": "success deleting user",
        "data": {
            "_id": "64c2bf28241ee655eec823f8",
            "username": "admin2"
        }
    }
    ```

### Video

#### * /video - Post

* Deskripsi : Endpoint untuk membuat data thumbnail video baru dengan memasukkan url thumbnail tersebut
* Request Body :
    ```
    {
        "url": "https://www.google.com/image"
    }
    ```
* Response :
    ```
    {
        "status_code": 201,
        "message": "success creating videos",
        "data": {
            "url": "https://www.google.com/image",
            "_id": "64c33a6e4381a2ce0aa6495f",
            "__v": 0
        }
    }
    ```

#### * /video - Get

* Deskripsi : Endpoint untuk mendapatkan semua data thumbnail video pada database
* Response :
    ```
    {
        "status_code": 200,
        "message": "success getting all videos",
        "data": [
            {
                "_id": "64c2c35e52d9c2c441680c32",
                "url": "https://www.google.com/image",
                "__v": 0
            }
        ]
    }
    ```

#### * /video/:id - Get

* Deskripsi : Endpoint untuk mendapatkan data thumbnail video berdasar id
* Parameter :
    ```
    http://localhost:3000/api/video/64c2c35e52d9c2c441680c32
    ```
* Response :
    ```
    {
        "status_code": 200,
        "message": "success getting videos by id",
        "data": {
            "_id": "64c2c35e52d9c2c441680c32",
            "url": "https://www.google.com/image",
            "__v": 0
        }
    }
    ```

### Product

#### * /product - Post

* Deskripsi : Endpoint untuk membuat data produk baru dengan memasukkan id video sebagai thumbnail.
* Request body :
    ```
    {
        "title": "buku",
        "price": 20000,
        "link": "www.buku.com",
        "video_id": "64c2c35e52d9c2c441680c32"
    }
    ```
* Response :
    ```
    {
        "status_code": 201,
        "message": "success creating product",
        "data": {
            "title": "buku",
            "price": 20000,
            "link": "www.buku.com",
            "video": "64c2c35e52d9c2c441680c32",
            "_id": "64c33b9f4381a2ce0aa64964",
            "__v": 0
        }
    }
    ```

#### * /product/:videoId - Get

* Deskripsi : Endpoint untuk mendapatkan data product berdasarkan id dari video thumbnail
* Parameter :
    ```
    http://localhost:3000/api/product/64c2c35e52d9c2c441680c32
    ```
* Response :
    ```
    {
        "status_code": 200,
        "message": "success getting product by video id",
        "data": [
            {
                "_id": "64c2ced926a95e25653cd067",
                "title": "buku",
                "price": 20000,
                "link": "www.buku.com",
                "video": {
                    "_id": "64c2c35e52d9c2c441680c32",
                    "url": "https://www.google.com/image",
                    "__v": 0
                },
                "__v": 0
            }
        ]
    }
    ```

### Comment

#### * /comment - Post

* Deskripsi : Endpoint untuk membuat data komentar baru berdasar video id dan user id yang di ambil dari sesi login
* Request Body :
    ```
    {
        "comment": "kerenn anjayy",
        "video_id": "64c2c35e52d9c2c441680c32"
    }
    ```
* Response :
    ```
    {
        "status_code": 201,
        "message": "success creating comment",
        "data": {
            "comment": "kerenn anjayy",
            "user": "64c2b7ba7c1eb8eb3b97a570",
            "video": "64c2c35e52d9c2c441680c32",
            "_id": "64c33cb84381a2ce0aa6496a",
            "createdAt": "2023-07-28T03:57:44.863Z",
            "updatedAt": "2023-07-28T03:57:44.863Z",
            "__v": 0
        }
    }
    ```

#### * /comment/:videoId - Get

* Deskripsi : Endpoint untuk mendapatkan data komentar berdasar id dari video
* Parameter :
    ```
    http://localhost:3000/api/comment/64c2c35e52d9c2c441680c32
    ```
* Response :
    ```
    {
        "status_code": 200,
        "message": "success getting comment by video id",
        "data": [
            {
                "_id": "64c3158d8e7636ffba7f69bf",
                "comment": "kerenn anjayy",
                "user": {
                    "_id": "64c31552370584587a798a41",
                    "username": "admin"
                },
                "video": {
                    "_id": "64c2c35e52d9c2c441680c32",
                    "url": "https://www.google.com/image"
                },
                "createdAt": "2023-07-28T01:10:37.674Z",
                "updatedAt": "2023-07-28T01:10:37.674Z",
                "__v": 0
            }
        ]
    }
    ```

## Code By - GG3FSGP0303_Deni Fahrony