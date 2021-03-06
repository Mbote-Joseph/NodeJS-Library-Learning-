// Copyright 2022 user
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

// Express is a flexible Node.js.
// It can be used to design single-page, multi-page and hybrid web applications.

const express = require("express");
const app = express();

// app.get("/", function (req, res) {
//   res.send("<h2>Ready and energetic to learn NodeJS.</h2>");
// });
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("api/users", require("./routes/api/users"));

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
