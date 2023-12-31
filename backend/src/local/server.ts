/*
 *  Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
 *  SPDX-License-Identifier: Apache-2.0
 */

import api from "../lib/api";

/**
 * Start local server
 */
const port = 8080;
api.listen(port);

console.log(`Listening on port ${port}`);
