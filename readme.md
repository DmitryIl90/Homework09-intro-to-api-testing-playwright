**Checklist endpoint PUT / test-orders/{id}**

## | # | Name of test | Response Code | Test data | Status |

| 1 | Order was updated successfully with valid API key and id and | 200 (OK) | | Passed |
return status code OK
| 2 | Order was updated unsuccessfully with valid API key and | 400 (Bad Request) | | Passed |
invalid id and return status code Bad Request
| 3 | Order was updated unsuccessfully with missing API key and | 401 (Unauthorized) | | Passed |
return status code Unauthorized

**Checklist endpoint DELETE / test-orders/{id}**

## | # | Name of test | Response Code | Test data | Status |

| 1 | Order was deleted successfully with an exists id and valid API | 204 (No content) | | Passed |
key and return status code NO_CONTENT
| 2 | Order was deleted unsuccessfully with a non-existent order | 400 (Bad request) | | Passed |
with a valid API key and return status code BAD REQUEST
| 3 | Order was deleted with invalid API key and return status code | 401 (Unauthorized) | | Failed |
UNAUTHORIZED

**Checklist endpoint Get / test-orders**

## | # | Name of test | Response Code | Test data | Status |

| 1 | Successful login with valid username and password and return | 200 (OK) | | Passed |
status code OK
| 2 | Unsuccessful login with invalid username and password and | 400 (Bad request) | | Failed |
return status code BAD REQUEST
| 3 | Successful authorization with correct data should receive | 200 (OK) | | Passed |
code OK

**Checklist endpoint Post / api/loan-calc/decision**

## | # | Name of test | Response Code | Test data | Status |

| 1 | Successful decision of loan with correct data and Low Risk should receive code 200 | 200 (OK) | | Passed |
| 2 | Successful decision of loan with correct data and Medium Risk should receive code 200 | 200 (OK) | | Failed |
| 3 | Successful decision of loan with correct data and High Risk should receive code 200 | 200 (OK) | | Passed |
| 4 | Unsuccessful decision of loan with correct data and Very High Risk should receive | 200 (OK) | | Passed |
code 200
| 5 | Unsuccessful decision of loan for Young Customer and Very High Risk should receive | 200 (OK) | | Passed |
code 200
| 6 | Unsuccessful decision of loan with empty data should receive code 400 | 400 (Bad request) | | Failed |
