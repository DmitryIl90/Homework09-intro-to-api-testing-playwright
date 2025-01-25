**Checklist endpoint PUT / test-orders/{id}**

| # | Name of test                                                   | Response Code      | Test data      | Status |
------------------------------------------------------------------------------------------------------------------------
| 1 | Order was updated successfully with valid API key and id and   | 200 (OK)           |                | Passed |
return status code OK
| 2 | Order was updated unsuccessfully with valid API key and        | 400 (Not found)    |                | Passed |
invalid id and return status code Not Found
| 3 | Order was updated unsuccessfully with missing API key and      | 401 (Unauthorized) |                | Passed |
return status code Unauthorized

**Checklist endpoint DELETE / test-orders/{id}**

| # | Name of test                                                   | Response Code      | Test data      | Status |
------------------------------------------------------------------------------------------------------------------------
| 1 | Order was deleted successfully with an exists id and valid API | 204 (No content)   |                | Passed |
key and return status code NO_CONTENT
| 2 | Order was deleted unsuccessfully with a non-existent order     | 400 (Bad request)  |                | Passed |
with a valid API key and return status code BAD REQUEST 
| 3 | Order was deleted with invalid API key and return status code  | 401 (Unauthorized) |                | Passed |
UNAUTHORIZED

**Checklist endpoint Get / test-orders**

| # | Name of test                                                   | Response Code      | Test data      | Status |
------------------------------------------------------------------------------------------------------------------------
| 1 | Successful login with valid username and password and return   | 200 (OK)           |                | Passed |
status code OK
| 2 | Unsuccessful login with invalid username and password and      | 400 (Bad request)  |                | Passed |
return status code BAD REQUEST

