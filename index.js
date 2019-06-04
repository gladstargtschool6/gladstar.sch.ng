// Copyright 2018 Google LLC

2

//

3

// Licensed under the Apache License, Version 2.0 (the "License");

4

// you may not use this file except in compliance with the License.

5

// You may obtain a copy of the License at

6

//

7

//     https://www.apache.org/licenses/LICENSE-2.0

8

//

9

// Unless required by applicable law or agreed to in writing, software

10

// distributed under the License is distributed on an "AS IS" BASIS,

11

// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.

12

// See the License for the specific language governing permissions and

13

// limitations under the License.

14

​

15

/**

16

 * @namespace google

17

 */

18

/**

19

 * @namespace google.cloud

20

 */

21

/**

22

 * @namespace google.cloud.automl

23

 */

24

/**

25

 * @namespace google.cloud.automl.v1beta1

26

 */

27

/**

28

 * @namespace google.longrunning

29

 */

30

/**

31

 * @namespace google.protobuf

32

 */

33

/**

34

 * @namespace google.rpc

35

 */

36

​

37

'use strict';

38

​

39

// Import the clients for each version supported by this package.

40

const gapic = Object.freeze({

41

  v1beta1: require('./v1beta1'),

42

});

43

​

44

/**

45

 * The `automl` package has the following named exports:

46

 *

47

 * - `PredictionServiceClient` - Reference to

48

 *   {@link v1beta1.PredictionServiceClient}

49

 * - `AutoMlClient` - Reference to

50

 *   {@link v1beta1.AutoMlClient}

51

 * - `v1beta1` - This is used for selecting or pinning a

52

 *   particular backend service version. It exports:
29

 */

30

/**

31

 * @namespace google.protobuf

32

 */

33

/**

34

 * @namespace google.rpc

35

 */

36

​

37

'use strict';

38

​

39

// Import the clients for each version supported by this package.

40

const gapic = Object.freeze({

41

  v1beta1: require('./v1beta1'),

42

});

43

​

44

/**

45

 * The `automl` package has the following named exports:

46

 *

47

 * - `PredictionServiceClient` - Reference to

48

 *   {@link v1beta1.PredictionServiceClient}

49

 * - `AutoMlClient` - Reference to

50

 *   {@link v1beta1.AutoMlClient}

51

 * - `v1beta1` - This is used for selecting or pinning a

52

 *   particular backend service version. It exports:

53

 *     - `PredictionServiceClient` - Reference to

54

 *       {@link v1beta1.PredictionServiceClient}

55

 *     - `AutoMlClient` - Reference to

56

 *       {@link v1beta1.AutoMlClient}

57

 *

58

 * @module {object} @google-cloud/automl

59

 * @alias nodejs-automl

60

 *

61

 * @example <caption>Install the client library with <a href="https://www.npmjs.com/">npm</a>:</caption>

62

 * npm install --save automl

63

 *

64

 * @example <caption>Import the client library:</caption>

65

 * const automl = require('@google-cloud/automl');

66

 *

67

 * @example <caption>Create a client that uses <a href="https://goo.gl/64dyYX">Application Default Credentials (ADC)</a>:</caption>

68

 * const client = new automl.PredictionServiceClient();

69

 *

70

 * @example <caption>Create a client with <a href="https://goo.gl/RXp6VL">explicit credentials</a>:</caption>

71

 * const client = new automl.PredictionServiceClient({

72

 *   projectId: 'your-project-id',

73

 *   keyFilename: '/path/to/keyfile.json',

74

 * });

75

 */

76

​

77

/**

78

 * @type {object}

79

 * @property {constructor} PredictionServiceClient

80

 *   Reference to {@link v1beta1.PredictionServiceClient}

81

 * @property {constructor} AutoMlClient

82

 *   Reference to {@link v1beta1.AutoMlClient}

83

 */

84

module.exports = gapic.v1beta1;

85

​

86

/**

87

 * @type {object}

88

 * @property {constructor} PredictionServiceClient

89

 *   Reference to {@link v1beta1.PredictionServiceClient}

90

 * @property {constructor} AutoMlClient

91

 *   Reference to {@link v1beta1.AutoMlClient}

92

 */

93

module.exports.v1beta1 = gapic.v1beta1;

94

​

95

// Alias `module.exports` as `module.exports.default`, for future-proofing.

96

module.exports.default = Object.assign({}, module.exports);

97

​


