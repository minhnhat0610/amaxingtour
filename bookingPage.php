<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Plan a trip</title>
    <link rel="stylesheet" href="Booking page/bookingPage.css">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/flatpickr/dist/flatpickr.min.css">

</head>
<body>
    <div class="bannerContainer">
        <header>
        <nav class="navigation">
            <ul>
                <li><a href="index.html">Home</a></li>
                <li><a href="">Plan a trip</a></li>
                <li id="logoContainer"><a id="logo" href="">Am<span>a</span>zing T<span>ou</span>r</a></li>
                <li><a href="managePage.html">Manage you trip</a></li>
                <li><a href="index.html">Gallery</a></li>
                <li id="mobileMenuContainer"><a id="mobileMenu" href=""><i class="fas fa-ellipsis-h"></i></a></li>
            </ul>
        </nav>
        </header>
        <div class="headerBlur"></div>

        <div class="backgroundBlur">

        </div>

        <div class="bookingContainer">
            <div class="formContainer">
                <div class="stepLabel">
                    <span class="stepNumber activeNum">1</span>
                    <div class="stepName activeName">
                        <div class="progressBar"></div>
                        <p>Date and Guests</p>
                    </div>
                    <span class="stepNumber">2</span>
                    <div class="stepName">
                        <div class="progressBar"></div>
                        <p>Payment</p>
                    </div>
                    <span class="stepNumber">3</span>
                    <div class="stepName">
                        <div class="progressBar"></div>
                        <p>Review</p>
                    </div>
                </div>

                <div class="formSlider">
                    <form id="dateAndGuests">
                        <fieldset class="desInput">
                            <label for="destination">choose your tour: </label>
                            <select id="destination" name="destination">
                                <option>Yosemite National Park</option>
                                <option>Yellowstone National Park</option>
                                <option>Washington DC</option>
                             </select>
                        </fieldset>
                        <fieldset class="dateInput">
                            <div><label for="startDate">start date: </label>
                                <div>
                                    <input type="text" id="startDate" name="start_date" required/>
                                    <i id="startDateIcon" class="far fa-calendar"></i>
                                </div>
                                
                            </div>
                            <div><label for="endDate">end date: </label>
                                <div>
                                    <input type="text" id="endDate" name="end_date" required/>
                                    <i id="endDateIcon" class="far fa-calendar"></i>
                                </div>
                                
    
                            </div>
                                
                        </fieldset>
    
                        <fieldset class="guestInformation">
                            <div class="basic">
                                <label for="guestFirstName1">first name: </label>
                                <input type="text" id="guestFirstName1" name="guest_First1" required/>
                                <label for="guestLastName1">last name: </label>
                                <input type="text" id="guestLastName1" name="guest_Last1" required/>
                                <label for="guestEmail1">Email: </label>
                                <input type="email" id="guestEmail1" name="guest_Emai1" required/>
                            </div>
                            
                            <div class="extra">
                                <label for="guestPhone1">phone number: </label>
                                <input type="tel" id="guestPhone1" name="guest_Phone1" required/>
                                <label>Gender: </label>
                                <div> 
                                    <input type="radio" id="male" name="gender" value="Male"/>
                                    <label class="genderLabel" for="male">male</label>
                                </div>
                                
                                <div>
                                    <input type="radio" id="female" name="gender" value="Female"/>
                                    <label class="genderLabel" for="female">female</label>
        
                                </div>
    
                            </div>
                            
    
                        </fieldset>

                        
                        

                        

                        <button type="button" id="addGuestButton">+ add guest</button>

                    </form>

                    <form id="payment">
                        <fieldset class="cardInfor">
                            <legend> <i class="fas fa-id-card"></i> Payment information</legend>
                            <label for="cardName">name on card: </label>
                            <input type="text" id="cardName" name="card_Name" required/>
                            <label for="cardNumber">card number: </label>
                            <input type="text" id="cardNumber" name="card_Number" required/>
                            <label for="cardExp">expiration: </label>
                            <input type="text" id="cardExp" name="card_Exp" placeholder="MM/YYYY" required/>
                            <label for="cardCVV">CVV: </label>
                            <input type="text" id="cardCVV" name="card_CVV" required/>
                        </fieldset>

                        <fieldset class="billing">
                            <legend><i class="fas fa-map-marker-alt"></i> Billing address</legend>
                            <label for="streetName">street: </label>
                            <input type="text" id="streetName" name="street_Name" required/>
                            <label for="cityName">City: </label>
                            <input type="text" id="cityName" name="city_Name"  required/>
                            <label for="stateName">State: </label>
                            <input type="text" id="stateName" name="state_Name" required/>
                            <label for="zipcode">Zipcode: </label>
                            <input type="text" id="zipcode" name="zip_code" required/>
                        </fieldset>
                    </form>

                    <form id="review">
                        <fieldset class="tourInfor">
                            <legend><i class="fas fa-bus"></i> Tour information</legend>
                            <div class="dateReview">
                                <div>
                                    <label for="startDateReview">start date:</label>
                                <input type="text" id="startDateReview" name="startDate_Review" readonly/>
                                </div>
                                <div>
                                    <label for="endDateReview">end date:</label>
                                    <input type="text" id="endDateReview" name="endDate_Review" readonly/>
    
                                </div>
                            </div>

                            <div>
                                <div>
                                    <label for="tourName">tour name:</label>
                                    <input type="text" id="tourName" name="tour_Name" readonly/>
    
                                </div>

                                <div>
                                    <label for="confirmationNumber">confirmation:</label>
                                    <input type="text" id="confirmationNumber" name="confirmation_Number" readonly/>
    
                                </div>
                            </div>
                            

                        </fieldset>

                        <fieldset class="guestInforReview">
                            <legend><i class="fas fa-user"></i> Guest #1</legend>
                            <div class="basicReview">
                                <label for="guestFirstNameReview1">first name:</label>
                                <input type="text" id="guestFirstNameReview1" name="guest_First_Name_Review_1" readonly/>
                                <label for="guestLastNameReview1">last name:</label>
                                <input type="text" id="guestLastNameReview1" name="guest_Last_Name_Review_1" readonly/>
                                <label for="emailReview1">Email:</label>
                                <input type="text" id="emailReview1" name="email_Review_1" readonly/>
                            </div>

                            <div class="extraReview">
                                <label for="phoneReview1">phone number:</label>
                                <input type="text" id="phoneReview1" name="phone_Review_1" readonly/>
                                <label for="genderReview1">gender:</label>
                                <input type="text" id="genderReview1" name="gender_Review_1" readonly/>
                            </div>
                            

                        </fieldset>
                    </form>

                    <form id="result">
                        <div class="checkmark">
                            <div class="check"><div></div></div>
                            <div class="fill"></div>
                        </div>
                        <p class="thankMessage">thank you for choosing us</p>
                        <p>a confirmation has sent out to your email</p>
                        <p >we are looking forward to see you on tour!</p>
                        <p class="responseFromServer"></p>
                    </form>

                </div>
            
                <div class="buttonContainer">
                    <button type="button" id="pre">Back</button>
                    <button type="button" id="next">Continue</button>
                </div>

                
                
            </div>
            <div class="tourImageDisplay">
                <p>plan your trip</p>
            </div>
        </div>
        
    </div>


    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <script src="https://kit.fontawesome.com/e23e09cf11.js" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/flatpickr"></script>
    <script src="JS/bookingPage.js" ></script>


</body>
</html>