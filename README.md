# Hospital Backend API

A Server-side API built on NodeJS and MongoDB for hospital doctors to keep track of their patients with Covid19 test reports.

[Live](https://itchy-parka-hare.cyclic.app/)

## Features

- An API for the doctors of a Hospital that has been allocated by the govt for testing and quarantine + well-being of COVID-19 patients
- There can be 2 types of Users
  - Doctors
  - Patients
- Doctors can log in
- Each time a patient visits, the doctor will follow 2 steps
  - Register the patient in the app (using phone number, if the patient already exists, just
    return the patient info in the API)
  - After the checkup, create a Report
- Patient Report will have the following fields
  - Created by a doctor
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

![register_doctor](https://github.com/Gaurav8757/hospital-api/assets/94515205/974fa162-7b83-44ff-a1f1-18a0cd761e9a)

![login_doctor](https://github.com/Gaurav8757/hospital-api/assets/94515205/fbb1ee9f-de81-4b11-9a8a-e037ef69724d)

![patient_register](https://github.com/Gaurav8757/hospital-api/assets/94515205/f2aae6a5-6e97-42d3-bb1e-bca9226fab9a)

![patient_status](https://github.com/Gaurav8757/hospital-api/assets/94515205/d8c2873c-9881-41d1-94ed-20f7d3ce7f0e)

![deployed api](https://github.com/Gaurav8757/hospital-api/assets/94515205/3002c14b-732f-46f8-a92f-2f311fbb4e78)
