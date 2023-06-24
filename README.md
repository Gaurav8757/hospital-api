# Hospital Backend API

A Server-side API built on NodeJS and MongoDB for hospital doctors to keep track of their patients with Covid19 test reports.

[Live](https://enchanting-cuff-dog.cyclic.app/)

[Documentation](https://hospital-api-production.up.railway.app/api-docs/#/)

## Features

- An API for the doctors of a Hospital which has been allocated by the govt for testing and quarantine + well being of COVID-19 patients
- There can be 2 types of Users
  - Doctors
  - Patients
- Doctors can log in
- Each time a patient visits, the doctor will follow 2 steps
  - Register the patient in the app (using phone number, if the patient already exists, just
    return the patient info in the API)
  - After the checkup, create a Report
- Patient Report will have the following fields
  - Created by doctor
  - Status [Negative, Travelled-Quarantine, Symptoms-Quarantine, Positive-Admit]
  - Date

## Folder Structure

```
.
└── src/
    ├── config/
    │   ├── mongoose.js
    │   └── passport-jwt.js
    ├── controllers/
    │   ├── doctor-controller
    │   ├── patient-controller
    │   └── report-controller
    ├── models/
    │   ├── doctor/
    │   ├── patient/
    │   └── report/
    ├── routes/
    │   ├── index
    │   └── api/
    │       └── v1/
    │           ├── index
    │           ├── doctor
    │           ├── patient
    │           └── report
    └── index.js

```

Screenshots:

![image](https://user-images.githubusercontent.com/36923392/203630838-9f536cc0-cf35-4d03-b9ce-8fc405b73cda.png)

![image](https://user-images.githubusercontent.com/36923392/203630924-e1769339-2368-43ae-8de8-824b2f895e9c.png)

![image](https://user-images.githubusercontent.com/36923392/203631032-579dd886-888b-4534-ac91-698e6f977ffd.png)

![image](https://user-images.githubusercontent.com/36923392/203631227-b1989557-7fc7-4872-b64e-54b8300b5a2f.png)
