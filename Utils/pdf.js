export const pdfTestInfo = {
  status: "success",
  message: "",
  data: {
    uuid: "5166afa6-1899-44c5-bcf5-da175041ba2c",
    labBranch: {
      uuid: "ab4a60fe-ab59-4913-93c7-8ce7ab0c40f0",
      lab: {
        uuid: "9caf70ab-ee82-4346-8d2d-8eb3bba210ee",
        name: "Ganesh lab",
        email: "mallickdebditya@gmail.com",
        mobile: "78214642",
        city: null,
        state: "West Bengal",
        pin_code: "713422",
        locality: null,
        address: "kolkata",
      },
      name: "Ganesh lab",
      mobile: null,
      address: null,
      message: null,
    },
    patient_info: {
      id: 1000038,
      uuid: "e170523a-4fe5-46de-9b80-9d01bcca1ddd",
      patient: {
        uuid: "d080a9ec-dd57-49f4-9a2a-1f42e4056ca5",
        lab: {
          uuid: "9caf70ab-ee82-4346-8d2d-8eb3bba210ee",
          name: "Ganesh lab",
          email: "mallickdebditya@gmail.com",
          mobile: "78214642",
          city: null,
          state: "West Bengal",
          pin_code: "713422",
          locality: null,
          address: "kolkata",
        },
        labBranch: {
          uuid: "ab4a60fe-ab59-4913-93c7-8ce7ab0c40f0",
          lab: {
            uuid: "9caf70ab-ee82-4346-8d2d-8eb3bba210ee",
            name: "Ganesh lab",
            email: "mallickdebditya@gmail.com",
            mobile: "78214642",
            city: null,
            state: "West Bengal",
            pin_code: "713422",
            locality: null,
            address: "kolkata",
          },
          name: "Ganesh lab",
          mobile: null,
          address: null,
          message: null,
        },
        email: "d.7236674@email.com",
        role: "",
        permissions: null,
        mobile: "7236674",
        name: "deba ghosh",
        is_lab_owner: false,
        is_patient: true,
      },
      name: "deba ghosh",
      doctor: {
        uuid: "24e35f4e-ba89-46c1-b104-6d0349806e01",
        name: "Dr das",
        commission: 5,
        labBranch: {
          uuid: "ab4a60fe-ab59-4913-93c7-8ce7ab0c40f0",
          lab: {
            uuid: "9caf70ab-ee82-4346-8d2d-8eb3bba210ee",
            name: "Ganesh lab",
            email: "mallickdebditya@gmail.com",
            mobile: "78214642",
            city: null,
            state: "West Bengal",
            pin_code: "713422",
            locality: null,
            address: "kolkata",
          },
          name: "Ganesh lab",
          mobile: null,
          address: null,
          message: null,
        },
        address: "kolkata",
        email: null,
        mobile: null,
      },
      gender: "male",
      dateOfBirth: "2004-06-25",
      age: 20,
      message: null,
      ageType: "years",
      created: "2024-06-25T19:44:53.461815+05:30",
    },
    tests: [
      {
        uuid: "f753a547-aad3-4344-b28c-cb7566ee6271",
        labBranch: null,
        category: {
          uuid: "45ab17c9-e784-4b9d-ad3b-0b5fcfee20a9",
          name: "Biochemistry",
          is_active: true,
        },
        testName: "DHEA",
        shortcut: "DHEA",
        sampleType: "Blood",
        testPrice: 400,
        precautions:
          "Precaution Details:\n•⁠  ⁠Before Testing: Verify that all required PPE is in good condition and properly fitted.\n•⁠  ⁠During Testing: Consistently wear PPE and avoid touching your face, eyes, or mouth with gloved hands.\n•⁠  ⁠After Testing: Properly dispose of or decontaminate PPE as per laboratory protocols, and thoroughly wash hands after removing gloves.\n\nThis precaution helps minimize the risk of contamination, exposure to hazardous substances, and accidental injuries, thereby ensuring the safety of laboratory personnel and maintaining the integrity of test results.",
        testComponent: {
          testComponents: [
            {
              name: "DHEA",
              type: "component",
              unit: "μg/dl\t",
              result: "text",
              status: true,
              refRange: [
                {
                  age: {
                    lowerLimit: 0,
                    higherLimit: 0,
                  },
                  gender: "",
                  ageUnit: "",
                  criticalLow: 0,
                  normalRange: {
                    lowerLimit: 0,
                    higherLimit: 0,
                  },
                  criticalHigh: 0,
                },
              ],
              separated: false,
              resultType: "text",
              selectOptions: [],
              selectedResult: "",
            },
          ],
        },
        comments: [],
      },
      {
        uuid: "800a9ede-ece5-4905-a2c2-db87287673c9",
        labBranch: null,
        category: {
          uuid: "45ab17c9-e784-4b9d-ad3b-0b5fcfee20a9",
          name: "Biochemistry",
          is_active: true,
        },
        testName: "Arterial Blood Gas",
        shortcut: "Arterial Blood Gas",
        sampleType: "Blood",
        testPrice: 200,
        precautions:
          "Precaution Details:\n•⁠  ⁠Before Testing: Verify that all required PPE is in good condition and properly fitted.\n•⁠  ⁠During Testing: Consistently wear PPE and avoid touching your face, eyes, or mouth with gloved hands.\n•⁠  ⁠After Testing: Properly dispose of or decontaminate PPE as per laboratory protocols, and thoroughly wash hands after removing gloves.\n\nThis precaution helps minimize the risk of contamination, exposure to hazardous substances, and accidental injuries, thereby ensuring the safety of laboratory personnel and maintaining the integrity of test results.",
        testComponent: {
          testComponents: [
            {
              name: "pH",
              type: "component",
              unit: "",
              result: "text",
              status: true,
              refRange: [
                {
                  age: {
                    lowerLimit: "1",
                    higherLimit: "100",
                  },
                  gender: "both",
                  ageUnit: "years",
                  criticalLow: 0,
                  normalRange: {
                    lowerLimit: "7.3",
                    higherLimit: "7.45",
                  },
                  criticalHigh: 0,
                },
              ],
              separated: false,
              resultType: "text",
              selectOptions: [],
              selectedResult: "",
            },
            {
              name: "PCO2",
              type: "component",
              unit: "mmHg",
              result: "text",
              status: true,
              refRange: [
                {
                  age: {
                    lowerLimit: "1",
                    higherLimit: "100",
                  },
                  gender: "both",
                  ageUnit: "years",
                  criticalLow: 0,
                  normalRange: {
                    lowerLimit: "35",
                    higherLimit: "45",
                  },
                  criticalHigh: 0,
                },
              ],
              separated: false,
              resultType: "text",
              selectOptions: [],
              selectedResult: "",
              refRangeComment: "35-45",
            },
            {
              name: "Bicarbonate",
              type: "component",
              unit: "mEq/L",
              result: "text",
              status: true,
              refRange: [
                {
                  age: {
                    lowerLimit: "1",
                    higherLimit: "100",
                  },
                  gender: "both",
                  ageUnit: "years",
                  criticalLow: 0,
                  normalRange: {
                    lowerLimit: "22",
                    higherLimit: "26",
                  },
                  criticalHigh: 0,
                },
              ],
              separated: false,
              resultType: "text",
              selectOptions: [],
              selectedResult: "",
              refRangeComment: "22-26",
            },
            {
              name: "Total CO2 Contents",
              type: "component",
              unit: "mEq/L",
              result: "text",
              status: true,
              refRange: [
                {
                  age: {
                    lowerLimit: "1",
                    higherLimit: "100",
                  },
                  gender: "both",
                  ageUnit: "years",
                  criticalLow: 0,
                  normalRange: {
                    lowerLimit: "22.1",
                    higherLimit: "28.3",
                  },
                  criticalHigh: 0,
                },
              ],
              separated: false,
              resultType: "text",
              selectOptions: [],
              selectedResult: "",
              refRangeComment: "22.1-28.3",
            },
            {
              name: "Standard Bicarbonate",
              type: "component",
              unit: "mEq/L",
              result: "text",
              status: true,
              refRange: [
                {
                  age: {
                    lowerLimit: "1",
                    higherLimit: "100",
                  },
                  gender: "both",
                  ageUnit: "years",
                  criticalLow: 0,
                  normalRange: {
                    lowerLimit: "22",
                    higherLimit: "26",
                  },
                  criticalHigh: 0,
                },
              ],
              separated: false,
              resultType: "text",
              selectOptions: [],
              selectedResult: "",
              refRangeComment: "22-26",
            },
            {
              name: "Base Excess",
              type: "component",
              unit: "mEq/L",
              result: "text",
              status: true,
              refRange: [
                {
                  age: {
                    lowerLimit: "1",
                    higherLimit: "100",
                  },
                  gender: "both",
                  ageUnit: "years",
                  criticalLow: 0,
                  normalRange: {
                    lowerLimit: "0",
                    higherLimit: "2",
                  },
                  criticalHigh: 0,
                },
              ],
              separated: false,
              selectedResult: "",
              refRangeComment: "0-2",
            },
            {
              name: "PO2",
              type: "component",
              unit: "mmHg",
              result: "text",
              status: true,
              refRange: [
                {
                  age: {
                    lowerLimit: "1",
                    higherLimit: "100",
                  },
                  gender: "both",
                  ageUnit: "years",
                  criticalLow: 0,
                  normalRange: {
                    lowerLimit: "75",
                    higherLimit: "100",
                  },
                  criticalHigh: 0,
                },
              ],
              separated: false,
              selectedResult: "",
              refRangeComment: "75-100",
            },
            {
              name: "Oxygen saturation capacity",
              type: "component",
              unit: "%",
              result: "text",
              status: true,
              refRange: [
                {
                  age: {
                    lowerLimit: "1",
                    higherLimit: "100",
                  },
                  gender: "both",
                  ageUnit: "years",
                  criticalLow: 0,
                  normalRange: {
                    lowerLimit: 0,
                    higherLimit: 0,
                  },
                  criticalHigh: 0,
                },
              ],
              separated: false,
              resultType: "text",
              selectOptions: [],
              selectedResult: "",
            },
            {
              name: "Base Excess - Extracellular fluid",
              type: "component",
              unit: "mEq/L",
              result: "text",
              status: true,
              refRange: [
                {
                  age: {
                    lowerLimit: "1",
                    higherLimit: "100",
                  },
                  gender: "",
                  ageUnit: "years",
                  criticalLow: 0,
                  normalRange: {
                    lowerLimit: 0,
                    higherLimit: 0,
                  },
                  criticalHigh: 0,
                },
              ],
              separated: false,
              resultType: "text",
              selectOptions: [],
              selectedResult: "",
            },
            {
              name: "Hemoglobin",
              type: "component",
              unit: "g/dl",
              result: "text",
              status: true,
              refRange: [
                {
                  age: {
                    lowerLimit: "1",
                    higherLimit: "100",
                  },
                  gender: "",
                  ageUnit: "years",
                  criticalLow: 0,
                  normalRange: {
                    lowerLimit: 0,
                    higherLimit: 0,
                  },
                  criticalHigh: 0,
                },
              ],
              separated: false,
              resultType: "text",
              selectOptions: [],
              selectedResult: "",
            },
          ],
        },
        comments: [],
      },
    ],
    packages: [
      {
        uuid: "0ab2900d-5689-4d06-9973-772302a53ea5",
        tests: [
          {
            uuid: "36015618-ea35-44ea-9f60-cbf43d1d4581",
            labBranch: null,
            category: {
              uuid: "09fa966e-26b8-4158-81ab-ed3f8fdd2b39",
              name: "Hematology",
              is_active: true,
            },
            testName: "Blood Group & Rh",
            shortcut: "Bg & RH",
            sampleType: "Blood",
            testPrice: 300,
            precautions:
              "Precaution Details:\n•⁠  ⁠Before Testing: Verify that all required PPE is in good condition and properly fitted.\n•⁠  ⁠During Testing: Consistently wear PPE and avoid touching your face, eyes, or mouth with gloved hands.\n•⁠  ⁠After Testing: Properly dispose of or decontaminate PPE as per laboratory protocols, and thoroughly wash hands after removing gloves.\n\nThis precaution helps minimize the risk of contamination, exposure to hazardous substances, and accidental injuries, thereby ensuring the safety of laboratory personnel and maintaining the integrity of test results.",
            testComponent: {
              testComponents: [
                {
                  name: "ABO",
                  type: "component",
                  unit: "",
                  result: "text",
                  status: true,
                  separated: false,
                  resultType: "select",
                  selectOptions: ["Positive ", "Negative "],
                  selectedResult: "",
                },
                {
                  name: "Rh(Anti-D)",
                  type: "component",
                  unit: "",
                  result: "text",
                  status: true,
                  separated: false,
                  resultType: "select",
                  selectOptions: ["Positive ", "Negative "],
                  selectedResult: "",
                },
              ],
            },
            comments: [],
          },
          {
            uuid: "8701c619-6177-4c27-9a44-0409a2f057d3",
            labBranch: null,
            category: {
              uuid: "09fa966e-26b8-4158-81ab-ed3f8fdd2b39",
              name: "Hematology",
              is_active: true,
            },
            testName: "Serum creatinine",
            shortcut: "Serum creatinine",
            sampleType: "Blood",
            testPrice: 200,
            precautions:
              "Pathology tests are medical procedures used to diagnose diseases and monitor health conditions by analyzing samples like blood, urine, or tissue. To ensure accurate results and a smooth testing process, it's important to follow these precautions:\n\n•⁠  ⁠Follow any fasting requirements specified by your healthcare provider, typically for tests like blood glucose or lipid profiles.\n•⁠  ⁠Inform your healthcare provider about all medications, supplements, or herbal remedies you are taking, as these can affect test results.\n•⁠  ⁠Provide complete information about any existing health conditions you have, as they may impact the type of tests ordered or their interpretation.\n•⁠  ⁠Follow specific instructions given for each test, such as dietary restrictions or medication adjustments.\n•⁠  ⁠Ensure you arrive on time for your appointment, as some tests require samples to be collected at specific times.\n•⁠  ⁠Wear comfortable clothing that allows easy access to the area where samples will be taken.\n•⁠  ⁠Try to remain calm and relaxed during the procedure, as stress can sometimes affect test results.",
            testComponent: {
              testComponents: [
                {
                  name: "Serum creatinine",
                  type: "component",
                  unit: "mg/dl",
                  result: "text",
                  status: true,
                  refRange: [
                    {
                      age: {
                        lowerLimit: "1",
                        higherLimit: "100",
                      },
                      gender: "male",
                      ageUnit: "years",
                      criticalLow: 0,
                      normalRange: {
                        lowerLimit: "0.6",
                        higherLimit: "1.1",
                      },
                      criticalHigh: "3",
                    },
                    {
                      age: {
                        lowerLimit: "1",
                        higherLimit: "100",
                      },
                      gender: "female",
                      ageUnit: "years",
                      criticalLow: 0,
                      normalRange: {
                        lowerLimit: "0.5",
                        higherLimit: "0.8",
                      },
                      criticalHigh: "2",
                    },
                  ],
                  separated: false,
                  resultType: "text",
                  selectOptions: [],
                  selectedResult: "",
                  refRangeComment: "0.6-1.1(Male)\n0.5-0.8(Female)",
                },
              ],
            },
            comments: [],
          },
          {
            uuid: "c029c9d2-b563-4d12-acae-45fa219fa79c",
            labBranch: null,
            category: {
              uuid: "09fa966e-26b8-4158-81ab-ed3f8fdd2b39",
              name: "Hematology",
              is_active: true,
            },
            testName: "Total Bilirubin",
            shortcut: "Total Bilirubin",
            sampleType: "Blood",
            testPrice: 100,
            precautions:
              "Precaution Details:\n•⁠  ⁠Before Testing: Verify that all required PPE is in good condition and properly fitted.\n•⁠  ⁠During Testing: Consistently wear PPE and avoid touching your face, eyes, or mouth with gloved hands.\n•⁠  ⁠After Testing: Properly dispose of or decontaminate PPE as per laboratory protocols, and thoroughly wash hands after removing gloves.\n\nThis precaution helps minimize the risk of contamination, exposure to hazardous substances, and accidental injuries, thereby ensuring the safety of laboratory personnel and maintaining the integrity of test results.",
            testComponent: {
              testComponents: [
                {
                  name: "Direct",
                  type: "component",
                  unit: "mg/dL",
                  result: "text",
                  status: true,
                  refRange: [
                    {
                      age: {
                        lowerLimit: "1",
                        higherLimit: "100",
                      },
                      gender: "both",
                      ageUnit: "years",
                      criticalLow: 0,
                      normalRange: {
                        lowerLimit: "0",
                        higherLimit: "0.3",
                      },
                      criticalHigh: 0,
                    },
                  ],
                  separated: false,
                  resultType: "text",
                  selectOptions: [],
                  selectedResult: "",
                  refRangeComment: "0-0.3",
                },
                {
                  name: "Indirect",
                  type: "component",
                  unit: "mg/dL",
                  result: "text",
                  status: true,
                  refRange: [
                    {
                      age: {
                        lowerLimit: "1",
                        higherLimit: "100",
                      },
                      gender: "both",
                      ageUnit: "years",
                      criticalLow: 0,
                      normalRange: {
                        lowerLimit: "0.2",
                        higherLimit: "1",
                      },
                      criticalHigh: 0,
                    },
                  ],
                  separated: false,
                  resultType: "text",
                  selectOptions: [],
                  selectedResult: "",
                  refRangeComment: "0.2-1",
                },
                {
                  name: "Total",
                  type: "component",
                  unit: "mg/dL",
                  result: "text",
                  status: true,
                  refRange: [
                    {
                      age: {
                        lowerLimit: "1",
                        higherLimit: "100",
                      },
                      gender: "",
                      ageUnit: "years",
                      criticalLow: "0",
                      normalRange: {
                        lowerLimit: "0.3",
                        higherLimit: "1.2",
                      },
                      criticalHigh: "3",
                    },
                  ],
                  separated: false,
                  resultType: "text",
                  selectOptions: [],
                  selectedResult: "",
                  refRangeComment: "0.3-1.2",
                },
              ],
            },
            comments: [],
          },
          {
            uuid: "4d30779a-953d-4bd9-8ce4-e81c1818ba1c",
            labBranch: null,
            category: {
              uuid: "09fa966e-26b8-4158-81ab-ed3f8fdd2b39",
              name: "Hematology",
              is_active: true,
            },
            testName: "Hemoglobin",
            shortcut: "Hemoglobin",
            sampleType: "Blood",
            testPrice: 200,
            precautions:
              "People who perform vigorous exercise are also at greater risk, as exertion can lead to a breakdown of red blood cells in the bloodstream. Someone who is menstruating or pregnant may also be at increased risk of developing anemia.",
            testComponent: {
              testComponents: [
                {
                  name: "Hemoglobin",
                  type: "component",
                  unit: "g/dL",
                  result: "text",
                  status: true,
                  refRange: [
                    {
                      age: {
                        lowerLimit: "1",
                        higherLimit: "106",
                      },
                      gender: "both",
                      ageUnit: "years",
                      criticalLow: "8",
                      normalRange: {
                        lowerLimit: "11",
                        higherLimit: "15.5",
                      },
                      criticalHigh: "20",
                    },
                  ],
                  separated: false,
                  resultType: "text",
                  selectOptions: [],
                  selectedResult: "",
                  refRangeComment: "11-15.5",
                },
              ],
            },
            comments: [],
          },
          {
            uuid: "acb1be7f-18ba-4a6d-b98f-74cd39dbca0a",
            labBranch: null,
            category: {
              uuid: "45ab17c9-e784-4b9d-ad3b-0b5fcfee20a9",
              name: "Biochemistry",
              is_active: true,
            },
            testName: "Random Blood Sugar",
            shortcut: "Random Blood Sugar",
            sampleType: "Blood",
            testPrice: 200,
            precautions:
              "Pathology tests are medical procedures used to diagnose diseases and monitor health conditions by analyzing samples like blood, urine, or tissue. To ensure accurate results and a smooth testing process, it's important to follow these precautions:\n\n•⁠  ⁠Follow any fasting requirements specified by your healthcare provider, typically for tests like blood glucose or lipid profiles.\n•⁠  ⁠Inform your healthcare provider about all medications, supplements, or herbal remedies you are taking, as these can affect test results.\n•⁠  ⁠Provide complete information about any existing health conditions you have, as they may impact the type of tests ordered or their interpretation.\n•⁠  ⁠Follow specific instructions given for each test, such as dietary restrictions or medication adjustments.\n•⁠  ⁠Ensure you arrive on time for your appointment, as some tests require samples to be collected at specific times.\n•⁠  ⁠Wear comfortable clothing that allows easy access to the area where samples will be taken.\n•⁠  ⁠Try to remain calm and relaxed during the procedure, as stress can sometimes affect test results.\n•⁠  ⁠Follow any post-test instructions provided by your healthcare provider, which may include rest periods or dietary advice.",
            testComponent: {
              testComponents: [
                {
                  name: "Random Blood Sugar",
                  type: "component",
                  unit: "mg/dl",
                  result: "text",
                  status: true,
                  refRange: [
                    {
                      age: {
                        lowerLimit: "1",
                        higherLimit: "100",
                      },
                      gender: "both",
                      ageUnit: "years",
                      criticalLow: "50",
                      normalRange: {
                        lowerLimit: "60",
                        higherLimit: "160",
                      },
                      criticalHigh: "200",
                    },
                  ],
                  separated: false,
                  resultType: "text",
                  selectOptions: [],
                  selectedResult: "",
                  refRangeComment: "60-160",
                },
              ],
            },
            comments: [],
          },
          {
            uuid: "e8990fa9-4d06-44cd-8c9f-ae0cf146cb63",
            labBranch: null,
            category: {
              uuid: "34c5d15b-d8ee-4cc6-8b96-8aacbbb2a051",
              name: "Urinalysis",
              is_active: true,
            },
            testName: "Urine Routine Examination",
            shortcut: "Urine Routine Examination",
            sampleType: "Urine",
            testPrice: 0,
            precautions:
              "Precaution Details:\n•⁠  ⁠Before Testing: Verify that all required PPE is in good condition and properly fitted.\n•⁠  ⁠During Testing: Consistently wear PPE and avoid touching your face, eyes, or mouth with gloved hands.\n•⁠  ⁠After Testing: Properly dispose of or decontaminate PPE as per laboratory protocols, and thoroughly wash hands after removing gloves.\n\nThis precaution helps minimize the risk of contamination, exposure to hazardous substances, and accidental injuries, thereby ensuring the safety of laboratory personnel and maintaining the integrity of test results.",
            testComponent: {
              testComponents: [
                {
                  name: "Quantity",
                  type: "component",
                  unit: "ml",
                  result: "text",
                  status: true,
                  separated: false,
                  resultType: "text",
                  selectOptions: [],
                  selectedResult: "",
                },
                {
                  name: "Colour",
                  type: "component",
                  unit: "",
                  result: "text",
                  status: true,
                  separated: false,
                  resultType: "text",
                  selectOptions: [],
                  selectedResult: "",
                },
                {
                  name: "Transparency",
                  type: "component",
                  unit: "",
                  result: "text",
                  status: true,
                  separated: false,
                  resultType: "text",
                  selectOptions: [],
                  selectedResult: "",
                },
                {
                  name: "Specific Gravity",
                  type: "component",
                  unit: "",
                  result: "text",
                  status: true,
                  separated: false,
                  resultType: "text",
                  selectOptions: [],
                  selectedResult: "",
                },
                {
                  name: "pH",
                  type: "component",
                  unit: "",
                  result: "text",
                  status: true,
                  separated: false,
                  resultType: "text",
                  selectOptions: [],
                  selectedResult: "",
                },
                {
                  name: "Protein / Albumin",
                  type: "component",
                  unit: "",
                  result: "text",
                  status: true,
                  separated: false,
                  resultType: "text",
                  selectOptions: [],
                  selectedResult: "",
                },
                {
                  name: "Sugar / Glucose",
                  type: "component",
                  unit: "",
                  result: "text",
                  status: true,
                  separated: false,
                  resultType: "text",
                  selectOptions: [],
                  selectedResult: "",
                },
                {
                  name: "Ketone Bodies",
                  type: "component",
                  unit: "",
                  result: "text",
                  status: true,
                  separated: false,
                  resultType: "text",
                  selectOptions: [],
                  selectedResult: "",
                },
                {
                  name: "Bilirubin",
                  type: "component",
                  unit: "",
                  result: "text",
                  status: true,
                  separated: false,
                  resultType: "text",
                  selectOptions: [],
                  selectedResult: "",
                },
                {
                  name: "R.B.C",
                  type: "component",
                  unit: "/HFP",
                  result: "text",
                  status: true,
                  separated: false,
                  resultType: "text",
                  selectOptions: [],
                  selectedResult: "",
                },
                {
                  name: "Pus Cells",
                  type: "component",
                  unit: "/HFP",
                  result: "text",
                  status: true,
                  separated: false,
                  resultType: "text",
                  selectOptions: [],
                  selectedResult: "",
                },
                {
                  name: "Epithilial Cells",
                  type: "component",
                  unit: "/HFP",
                  result: "text",
                  status: true,
                  separated: false,
                  resultType: "text",
                  selectOptions: [],
                  selectedResult: "",
                },
                {
                  name: "Casts",
                  type: "component",
                  unit: "",
                  result: "text",
                  status: true,
                  separated: false,
                  resultType: "text",
                  selectOptions: [],
                  selectedResult: "",
                },
                {
                  name: "Crystals",
                  type: "component",
                  unit: "",
                  result: "text",
                  status: true,
                  separated: false,
                  resultType: "text",
                  selectOptions: [],
                  selectedResult: "",
                },
                {
                  name: "Bacteria",
                  type: "component",
                  unit: "",
                  result: "text",
                  status: true,
                  separated: false,
                  resultType: "text",
                  selectOptions: [],
                  selectedResult: "",
                },
                {
                  name: "Nitrite",
                  type: "component",
                  unit: "",
                  result: "text",
                  status: true,
                  separated: false,
                  resultType: "text",
                  selectOptions: [],
                  selectedResult: "",
                },
                {
                  name: "Leukocytes",
                  type: "component",
                  unit: "",
                  result: "text",
                  status: true,
                  separated: false,
                  resultType: "text",
                  selectOptions: [],
                  selectedResult: "",
                },
              ],
            },
            comments: [],
          },
          {
            uuid: "80a42a52-1a91-49cd-a7fd-ebe1c1618379",
            labBranch: null,
            category: {
              uuid: "119d2e43-ce19-4d1d-adb9-7b3edb708301",
              name: "Serology & Immunology",
              is_active: true,
            },
            testName: "VDRL",
            shortcut: "VDRL",
            sampleType: "Blood",
            testPrice: 0,
            precautions:
              "Precaution Details:\n•⁠  ⁠Before Testing: Verify that all required PPE is in good condition and properly fitted.\n•⁠  ⁠During Testing: Consistently wear PPE and avoid touching your face, eyes, or mouth with gloved hands.\n•⁠  ⁠After Testing: Properly dispose of or decontaminate PPE as per laboratory protocols, and thoroughly wash hands after removing gloves.\n\nThis precaution helps minimize the risk of contamination, exposure to hazardous substances, and accidental injuries, thereby ensuring the safety of laboratory personnel and maintaining the integrity of test results.",
            testComponent: {
              testComponents: [
                {
                  name: "VDRL",
                  type: "component",
                  unit: "",
                  result: "text",
                  status: true,
                  separated: false,
                  resultType: "text",
                  selectOptions: [],
                  selectedResult: "",
                },
              ],
            },
            comments: [],
          },
          {
            uuid: "fce53e0c-7cfb-499c-a104-f04e14dbc9c6",
            labBranch: null,
            category: {
              uuid: "119d2e43-ce19-4d1d-adb9-7b3edb708301",
              name: "Serology & Immunology",
              is_active: true,
            },
            testName: "HIV (Card test)",
            shortcut: "HIV (Card test)",
            sampleType: "Serum",
            testPrice: 200,
            precautions:
              "Precaution Details:\r\n•⁠  ⁠Before Testing: Verify that all required PPE is in good condition and properly fitted.\r\n•⁠  ⁠During Testing: Consistently wear PPE and avoid touching your face, eyes, or mouth with gloved hands.\r\n•⁠  ⁠After Testing: Properly dispose of or decontaminate PPE as per laboratory protocols, and thoroughly wash hands after removing gloves.\r\n\r\nThis precaution helps minimize the risk of contamination, exposure to hazardous substances, and accidental injuries, thereby ensuring the safety of laboratory personnel and maintaining the integrity of test results.",
            testComponent: {
              testComponents: [
                {
                  name: "HIV-1",
                  type: "component",
                  unit: "",
                  result: "text",
                  status: true,
                  separated: false,
                  resultType: "select",
                  selectOptions: ["Positive ", "Negative"],
                  selectedResult: "",
                },
                {
                  name: "HIV-2",
                  type: "component",
                  unit: "",
                  result: "text",
                  status: true,
                  separated: false,
                  resultType: "select",
                  selectOptions: ["Positive ", "Negative"],
                  selectedResult: "",
                },
              ],
            },
            comments: [],
          },
        ],
        name: "Pregnancy Profile - 2",
        shortcut: "Pregnancy Profile - 2",
        pkgPrice: 1000,
        precautions:
          "Precaution Details:\n•⁠  ⁠Before Testing: Verify that all required PPE is in good condition and properly fitted.\n•⁠  ⁠During Testing: Consistently wear PPE and avoid touching your face, eyes, or mouth with gloved hands.\n•⁠  ⁠After Testing: Properly dispose of or decontaminate PPE as per laboratory protocols, and thoroughly wash hands after removing gloves.\n\nThis precaution helps minimize the risk of contamination, exposure to hazardous substances, and accidental injuries, thereby ensuring the safety of laboratory personnel and maintaining the integrity of test results.",
      },
    ],
    created: "2024-06-25T19:44:53.523022+05:30",
  },
  meta: {},
};