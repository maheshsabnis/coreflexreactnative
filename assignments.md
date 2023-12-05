# Date: 30-Nov-2023

1. AsynStorage Exercise, Create a Component named ExpensesHeads Component with following Detials
    - ExpensesHeadId, string
        - Exp-Head-001
    - ExpensesHeadName, string
        - Petrol
    - ExpensesHeadDetails, string
        - Petrol to be filled in 3 Vehicles
    - MaxLimitForExpenses, string
        - 6500 per month
    Save this information in AsyncStorage with UI as follows
        - TexInput for each property
        - Once the Head is created it Must be shown in the FlatList
            - Text, Text, Text, Text, UpdateButton      
        - The HeadName can be Edited but not the Id, the Details can be changed, but the MaxLimit Cannot be more than a amount based on Following Rules
            - Petrol, Max 10K
            - Investment, Max 50K
            - Entertainmenty, Max 4K
            - Food, Max 15K
            - Hotel, Max 5K              


 # Date: 01-Dec-2023

 1. Create a FormComponent React Native Component, this will accept the 'formData' props. The 'formData' will be a JSON object e.g.
````javascript
    const employee = {
        EmpNo:0,
        EmpName: ''
    };
````
    - The FormComponent, should generate Text and TextInput based on keys of the 'formData'
    - The FormComponent will also have a 'Save' Button, that will Emit values for eachkey to parent component and the parent component should save this data in 'AsyncStorage' 

2. Modify the Dropdown to show the Filterbased Search along with expand, based on the search the option should be selected and shown in header the 'Select Actor' must be replaced by the selected / filtered matched value (Today) 



# Date: 04-Dec-2023

1. Modiy the ApiCallComponent based on the following needs
    - Create TextInput for Category Properties
    - Once the CategoryId is entered in the TextInput and if it is already present the Generate the Error Message and change the border-color of the TextInput to Red
    - The Save Button will be enabled only all the values are entered for Category
    - CategoryName Must start from UpperCase Character
    - The BasePrice should not be -ve
    - Show the Category List in the FlatList     

 # Date: 05-Dec-2023

 1. Use the AppState object for the following operations
    - When the App is in Active State, the app should be contineously fetching data from the REST APIs and store it in AsyncStorage
    - But when the App is in Background/Inactive the REST API call has to stop and when the App is active again resule the REST API call, but make sure that the duplicate data is not stored in the AsyncStorage
2. Use the BackHanler to clear AsyncStorage          