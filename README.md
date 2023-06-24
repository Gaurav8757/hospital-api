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

![image](![image](https://github.com/Gaurav8757/hospital-api/assets/94515205/bc8a4eb7-abb5-40cf-ba9a-9d86794078df)
)
![deployed api](https://github.com/Gaurav8757/hospital-api/assets/94515205/3002c14b-732f-46f8-a92f-2f311fbb4e78)

![image](![image](https://github.com/Gaurav8757/hospital-api/assets/94515205/fc1d38ac-53c5-42ac-8ed2-28154019f50f)
)

![image](![image](https://github.com/Gaurav8757/hospital-api/assets/94515205/ed057577-4453-43fe-90a4-cd28e5faa8f6)
)

![image](![image](https://github.com/Gaurav8757/hospital-api/assets/94515205/e384cac2-c1c6-4c18-9fc7-1307200344cf)
)
