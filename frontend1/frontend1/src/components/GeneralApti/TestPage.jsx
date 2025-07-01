import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const questionsData = {
  aptitudetest: {
    "Aptitude-Test-1": [
      { question: "Find the greatest number that will divide 43, 91 and 183 so as to leave the same remainder in each case.", options: ["4", "7", "9", "13"], answer: "4" },
      { question: "Which of the following fraction is the largest ?", options: ["7/8", "13/16", "31/40", "63/80"], answer: "7/8" },
      { question: ".009/? = 0.1", options: [".0009", ".09", ".9", "9"], answer: ".9" },
      { question: "The least perfect square, which is divisible by each of 21, 36 and 66 is:", options: ["214344", "214434", "213444", "231444"], answer: "213444" },
      { question: "What is Arun's present age?" ,statements:[
        "I. Five years ago, Arun's age was double that of his son's age at that time.",
        "II. Present ages of Arun and his son are in the ratio of 11 : 6 respectively.",
        " III. Five years hence, the respective ratio of Arun's age and his son's age will become 12 : 7."],  options: ["Only I and II", "Only I and II", "Any two of the three", "231444"], answer: "Any two of the three" }
    ],
    "Aptitude-Test-2": [
      { question: "n a regular week, there are 5 working days and for each day, the working hours are 8. A man gets Rs. 2.40 per hour for regular work and Rs. 3.20 per hours for overtime. If he earns Rs. 432 in 4 weeks, then how many hours does he work for ?", options: ["160", "175", "180" ,"195"], answer: "175" },
      { question: "Find a positive number which when increased by 17 is equal to 60 times the reciprocal of the number.", options: ["3", "10", "17", "20"], answer: "17" },
      { question: "In a two-digit, if it is known that its unit's digit exceeds its ten's digit by 2 and that the product of the given number and the sum of its digits is equal to 144, then the number is:", options: ["24", "26", "42", "46"], answer: "24" },
      { question: "Ayesha's father was 38 years of age when she was born while her mother was 36 years old when her brother four years younger to her was born. What is the difference between the ages of her parents?", options: ["2 years", "4 years", "6 years", "8 years"], answer: "8 years" },
      { question: "What is the present age of Tanya?" ,statements:[
        "I. The ratio between the present ages of Tanya and her brother Rahul is 3 : 4 respectively.",
        "II. After 5 years the ratio between the ages of Tanya and Rahul will be 4 : 5.",
        "III. Rahul is 5 years older than Tanya."], options: ["I and II only", "II and III only", "I and III only", "All I, II and III", "Any two of the three"], answer: "Any two of the three" }
    ],
    "Aptitude-Test-3": [
      { question: "A library has an average of 510 visitors on Sundays and 240 on other days. The average number of visitors per day in a month of 30 days beginning with a Sunday is:", options: ["250", "276", "280" ,"285"], answer: "285" },
      { question: "The average monthly income of P and Q is Rs. 5050. The average monthly income of Q and R is Rs. 6250 and the average monthly income of P and R is Rs. 5200. The monthly income of P is:", options: ["3500", "4000", "4050", "5000"], answer: "4000" },
      { question: "The sum of two number is 25 and their difference is 13. Find their product.", options: ["104", "114", "315", "325"], answer: "114" },
      { question: "What is the number?" ,statements:[
        "I. The sum of the two digits is 8. The ratio of the two digits is 1 : 3.",
        "The product of the two digit of a number is 12. The quotient of two digits is 3.",], options: ["I alone sufficient while II alone not sufficient to answer", "II alone sufficient while I alone not sufficient to answer", "Either I or II alone sufficient to answer", "Both I and II are not sufficient to answer", "Both I and II are necessary to answer"], answer: "Either I or II alone sufficient to answer" },
      { question: "A is two years older than B who is twice as old as C. If the total of the ages of A, B and C be 27, then how old is B?", options: ["7", "8", "9", "10", "11"], answer: "10" }
    ],
    "Aptitude-Test-4": [
      { question: "A fires 5 shots to B's 3 but A kills only once in 3 shots while B kills once in 2 shots. When B has missed 27 times, A has killed:", options: ["30 birds", "60 birds", "72 birds" ,"90 birds"], answer: "30 birds" },
      { question: "Six years ago, the ratio of the ages of Kunal and Sagar was 6 : 5. Four years hence, the ratio of their ages will be 11 : 10. What is Sagar's age at present?", options: ["16 years", "18 years", "20 years", "Cannot be determined", "None of these"], answer: "16 years" },
      { question: "Q is as much younger than R as he is older than T. If the sum of the ages of R and T is 50 years, what is definitely the difference between R and Q's age?", options: ["1 years", "2 years", "25 years", "Data inadequate", "None of these"], answer: "Data inadequate" },
      { question: "A, B and C can do a piece of work in 20, 30 and 60 days respectively. In how many days can A do the work if he is assisted by B and C on every third day?", options: ["12 days", "15 days", "16 days", "18 days"], answer: "15 days" },
      { question: "One card is drawn at random from a pack of 52 cards. What is the probability that the card drawn is a face card (Jack, Queen and King only)?", options: ["1/13", "3/13", "1/4", "9/52"], answer: "3/13" }
    ],
    "Aptitude-Test-5": [
      { question: "The greatest number which on dividing 1657 and 2037 leaves remainders 6 and 5 respectively, is:", options: ["123", "127", "235" ,"305"], answer: "127" },
      { question: "The least multiple of 7, which leaves a remainder of 4, when divided by 6, 9, 15 and 18 is:", options: ["74", "94", "184", "364"], answer: "364" },
      { question: "100 oranges are bought at the rate of Rs. 350 and sold at the rate of Rs. 48 per dozen. The percentage of profit or loss is:", options: ["14*2/7% gain", "15% gain", "14*2/7% loss", "15% loss"], answer: "15% gain" },
      { question: "Seats for Mathematics, Physics and Biology in a school are in the ratio 5 : 7 : 8. There is a proposal to increase these seats by 40%, 50% and 75% respectively. What will be the ratio of increased seats?", options: ["2 : 3 : 4", "6 : 7 : 8", "6 : 8 : 9", "None of these"], answer: "2 : 3 : 4" },
      { question: "Three friends, P, Q and R started a partnership business investing money in the ratio of 5 : 4 : 2 respectively for a period of 3 years. What is the amount received by P as his share profit?" ,statements:[
        "I. Total amount invested in the business in Rs. 22,000.",
        "II. Profit earned at the end of 3 years is 3/8 of the total investment.",
        "III. The average amount of profit earned per year is Rs. 2750."], options: ["I or II or III", "Either III only, or I and II together", "Any two of the three", "All I, II and III are required.", "None of these"], answer: "Either III only, or I and II together" }
    ],
    "Aptitude-Test-6": [
      { question: "If the sum of two numbers is 55 and the H.C.F. and L.C.M. of these numbers are 5 and 120 respectively, then the sum of the reciprocals of the numbers is equal to:", options: ["55/601", "601/55", "11/120" ,"120/11"], answer: "11/120" },
      { question: "The greatest number of four digits which is divisible by 15, 25, 40 and 75 is:", options: ["9000", "9400", "9600", "9800"], answer: "9600" },
      { question: "The product of two numbers is 9375 and the quotient, when the larger one is divided by the smaller, is 15. The sum of the numbers is:", options: ["380", "395", "400", "425"], answer: "400" },
      { question: "What is the two-digit number?" ,statements:[
        "I. The difference between the two-digit number and the number formed by interchanging the digits is 27.",
        "II. The difference between the two digits is 3.",
        "III. The digit at unit's place is less than that at ten's place by 3."], options: ["I and II only", "II and III only", "I, and either II or III", "All I, II and III", "Even with all I, II and III, answer cannot be give."], answer: "Even with all I, II and III, answer cannot be give." },
      { question: "Present ages of Sameer and Anand are in the ratio of 5 : 4 respectively. Three years hence, the ratio of their ages will become 11 : 9 respectively. What is Anand's present age in years?", options: ["24", "27", "40", "Cannot be Determined"], answer: "24" }
    ],
    "Aptitude-Test-7": [
      { question: "The least number which when divided by 5, 6 , 7 and 8 leaves a remainder 3, but when divided by 9 leaves no remainder, is:", options: ["1677", "1683", "2523" ,"3363"], answer: "1683" },
      { question: "617 + 6.017 + 0.617 + 6.0017 = ?", options: ["6.2963", "62.965", "629.6357", "None of these"], answer: "629.6357" },
      { question: "If	144/0.144 =	14.4/x , then the value of x is:", options: ["0.144", "1.44", "14.4", "144"], answer: "0.144" },
      { question: "(256)0.16 x (256)0.09 = ?", options: ["4", "16", "64", "256.25"], answer: "4" },
      { question: "A starts business with Rs. 3500 and after 5 months, B joins with A as his partner. After a year, the profit is divided in the ratio 2 : 3. What is B's contribution in the capital?", options: ["7500", "8000", "8500", "9000"], answer: "9000" }
    ],
    "Aptitude-Test-8": [
      { question: "The product of two numbers is 2028 and their H.C.F. is 13. The number of such pairs is:", options: ["1", "2", "3" ,"4"], answer: "2" },
      { question: "What will be the least number which when doubled will be exactly divisible by 12, 18, 21 and 30 ?", options: ["196", "630", "1260", "2520"], answer: "630" },
      { question: "The sum of the digits of a two-digit number is 15 and the difference between the digits is 3. What is the two-digit number?", options: ["69", "78", "96", "Cannot be determined", "None of these"], answer: "Cannot be determined" },
      { question: "A number consists of two digits. If the digits interchange places and the new number is added to the original number, then the resulting number will be divisible by:", options: ["3", "5", "9", "11"], answer: "11" },
      { question: "The difference between a two-digit number and the number obtained by interchanging the positions of its digits is 36. What is the difference between the two digits of that number?", options: ["3", "4", "9", "Cannot be determined"], answer: "4" }
    ],
    "Aptitude-Test-9": [
      { question: "Let N be the greatest number that will divide 1305, 4665 and 6905, leaving the same remainder in each case. Then sum of the digits in N is:", options: ["4", "5", "6" ,"8"], answer: "4" },
      { question: "The average weight of 8 person's increases by 2.5 kg when a new person comes in place of one of them weighing 65 kg. What might be the weight of the new person?", options: ["76 kg", "76.5 kg", "85 kg", "Data inadequate", "None of these"], answer: "85%" },
      { question: "The difference between a two-digit number and the number obtained by interchanging the digits is 36. What is the difference between the sum and the difference of the digits of the number if the ratio between the digits of the number is 1 : 2 ?", options: ["4", "8", "16", "None of these"], answer: "8" },
      { question: "The sum of the present ages of a father and his son is 60 years. Six years ago, father's age was five times the age of the son. After 6 years, son's age will be:", options: ["12 years", "14 years", "18 years", "20 years"], answer: "20 years" },
      { question: "Three candidates contested an election and received 1136, 7636 and 11628 votes respectively. What percentage of the total votes did the winning candidate get?", options: ["57%", "60%", "65%", "90%"], answer: "57%" }
    ],
    "Aptitude-Test-10": [
      { question: "The price of commodity X increases by 40 paise every year, while the price of commodity Y increases by 15 paise every year. If in 2001, the price of commodity X was Rs. 4.20 and that of Y was Rs. 6.30, in which year commodity X will cost 40 paise more than the commodity Y ?", options: ["2010", "2011", "2012" ,"2013"], answer: "2011" },
      { question: "If a - b = 3 and a^2 + b^2 = 29, find the value of ab.", options: ["12", "10", "15", "18"], answer: "10" },
      { question: "There are two examinations rooms A and B. If 10 students are sent from A to B, then the number of students in each room is the same. If 20 candidates are sent from B to A, then the number of students in A is double the number of students in B. The number of students in room A is:", options: ["20", "80", "100", "200"], answer: "100" },
      { question: "The product of two numbers is 120 and the sum of their squares is 289. The sum of the number is:", options: ["20", "23", "169", "None of these"], answer: "23" },
      { question: "The salaries A, B, C are in the ratio 2 : 3 : 5. If the increments of 15%, 10% and 20% are allowed respectively in their salaries, then what will be new ratio of their salaries?", options: ["3 : 3 : 10", "10 : 11 : 20", "23 : 33 : 60", "8 years"], answer: "23 : 33 : 60" }
    ],
    // Add more math papers...
  },

  verbalabilitytest: {
    "VerbalAbility-Test-1": [
      {statements: [" Direction (Q.Nos. 1 - 2)", "Read each sentence to find out whether there is any grammatical error in it. The error, if any will be in one part of the sentence. The letter of that part is the answer. If there is no error, the answer is 'D'. (Ignore the errors of punctuation, if any)."], question: "(solve as per the direction given above)", options: ["Do you know", "to play", "the guitar?", "No Error"], answer: "to play"},
      { question: "(solve as per the direction given above)", options: ["After leaving his office", "he went directly", "to a restaurant.", "No error."], answer: "No Error." },
      {statements: [" Direction (Q.Nos. 3 - 6)", "In the following the questions choose the word which best expresses the meaning of the given word."], question: "RESCUE", options: ["Command", "Help", "Defence", "Safety"], answer: "Help"},
      { question: "AWAKENED", options: ["Enlightened", "Realised", "Shook", "Waken"], answer: "Waken" },
      { question: "INSOLVENT", options: ["Poor", "Bankrupt", "Penniless", "Broke"], answer: "Bankrupt" },
      { question: "RECKLESS", options: ["Courageous", "Rash", "Bold", "Daring"], answer: "Rash" },
    ],
    "VerbalAbility-Test-2": [
      {statements: [" Direction (Q.Nos. 1 - 2)", "Read each sentence to find out whether there is any grammatical error in it. The error, if any will be in one part of the sentence. The letter of that part is the answer. If there is no error, the answer is 'D'. (Ignore the errors of punctuation, if any)."], question: "(solve as per the direction given above)", options: ["Looking back, I find that among the many impressions ofthe people of India,", "absorbed while I lived among them,", "are their reverence for great men and women.", "No error."], answer: "Looking back, I find that among the many impressions ofthe people of India,"},
      { question: "(solve as per the direction given above)", options: ["In management, as you rise higher,", "the problems you face becomemore and more unstructured and you can't just fall back on", "the tools you had been", "No error."], answer: "the problems you face becomemore and more unstructured and you can't just fall back on" },
      {statements: [" Direction (Q.Nos. 3 - 5)", "Read each sentence to find out whether there is any grammatical error in it. The error, if any will be in one part of the sentence. The letter of that part is the answer. If there is no error, the answer is 'D'. (Ignore the errors of punctuation, if any)."], question: "(solve as per the direction given above)", options: ["Even after worked in the office", "for as many as fifteen years,", "he still does not understand", "the basic objectives of the work.", "No Error"], answer: "Even after worked in the office"},
      { question: "(solve as per the direction given above)", options: ["I cannot", "make from", "what you are saying", "about him.", "No error."], answer: "make from" },
      { question: "(solve as per the direction given above)", options: ["Your machine would not have", "given you so much trouble", "if you had", "maintained it proper.", "No error."], answer: "maintained it proper." },
    ],
    "VerbalAbility-Test-3": [
      {statements: [" Direction (Q.Nos. 1 - 3)", "Read each sentence to find out whether there is any grammatical error in it. The error, if any will be in one part of the sentence. The letter of that part is the answer. If there is no error, the answer is 'D'. (Ignore the errors of punctuation, if any)."], question: "(solve as per the direction given above)", options: ["My wife has got", "a new job", "a month ago.", "No error."], answer: "My wife has got"},
      { question: "(solve as per the direction given above)", options: ["A body of volunteers", "have been organised", "to spread the message of the saint.", "No error."], answer: "have been organised" },
      { question: "(solve as per the direction given above)", options: ["In spite of several reminders,", "he did not so far send", "any reply to me, letters.", "No error."], answer: "he did not so far send" },
      {statements: [" Direction (Q.Nos. 4 - 5)", "Read each sentence to find out whether there is any grammatical error in it. The error, if any will be in one part of the sentence. The letter of that part is the answer. If there is no error, the answer is 'E'. (Ignore the errors of punctuation, if any)."], question: "(solve as per the direction given above)", options: ["He being the eldest son,", "his father expects him", "to take care of several things", "besides his regular studies.", "No error."], answer: "No error."},
      { question: "(solve as per the direction given above)", options: ["He was very disappointed", "when he found", "that someone else", "had secured higher marks.", "No error."], answer: "No error." },
    ],
    "VerbalAbility-Test-4": [
      {statements: [" Direction (Q.No. 1)", "Read each sentence to find out whether there is any grammatical error in it. The error, if any will be in one part of the sentence. The letter of that part is the answer. If there is no error, the answer is 'D'. (Ignore the errors of punctuation, if any)."], question: "(solve as per the direction given above)", options: ["There is no question", "of my failing", "in the examination.", "No Error"], answer: "of my failing"}, 
      {statements: [" Direction (Q.Nos. 2-3)", "Read each sentence to find out whether there is any grammatical error in it. The error, if any will be in one part of the sentence. The letter of that part is the answer. If there is no error, the answer is 'D'. (Ignore the errors of punctuation, if any)."], question: "(solve as per the direction given above)", options: ["Mr.Raman said that", "he had a difference", "with" ,"the chairman at his statement." ,"No Error"], answer: "the chairman at his statement."}, 
      { question: "(solve as per the direction given above)", options: ["I will put on", "a note in this regard", "for your consideration", "and necessary decision.", "No error."], answer: "I will put on" },
      {statements: [" Direction (Q.Nos. 4-5)", "Which of phrases given below each sentence should replace the phrase printed in bold type to make the grammatically correct? If the sentence is correct as it is, mark 'E' as the answer."], question: "Ramesh is as tall if not, taller than Mahesh.", options: ["not as tall but", "not so tall but as", "as tall as, if not" ,"as if not" ,"No correction required"], answer: "as tall as, if not"}, 
      { question: "Friends and comrades, the light has gone away from our lives and there is darkness everywhere", options: ["off", "out of", "out from", "out off", "No correction required"], answer: "out of" },
    ],
    "VerbalAbility-Test-5": [
      {statements: [" Direction (Q.Nos. 1 - 2)", "Read each sentence to find out whether there is any grammatical error in it. The error, if any will be in one part of the sentence. The letter of that part is the answer. If there is no error, the answer is 'D'. (Ignore the errors of punctuation, if any)."], question: "(solve as per the direction given above)", options: ["Everyone visiting the house asked the young girl", "how could she kill the wolf", "single handed and without a weapon.", "No Error"], answer: "how could she kill the wolf"},
      { question: "(solve as per the direction given above)", options: ["When I get a cold", "it takes me weeks", "to shake it off.", "No error."], answer: "When I get a cold" },
      {statements: [" Direction (Q.Nos. 3 - 5)", "Read each sentence to find out whether there is any grammatical error in it. The error, if any will be in one part of the sentence. The letter of that part is the answer. If there is no error, the answer is 'D'. (Ignore the errors of punctuation, if any)."], question: "(solve as per the direction given above)", options: ["He tried as he could", "Naveen did not", "succeed in getting", "his car to start up.", "No Error"], answer: "his car to start up."},
      { question: "(solve as per the direction given above)", options: ["Immediately after boarding the bus,", "Mahesh asked the conductor.", "that if he knew", "where the museum was,", "No error."], answer: "that if he knew" },
      { question: "(solve as per the direction given above)", options: ["I am contacting you", "sometime in next week", "to explain to you", "my problem in detail.", "No error."], answer: "sometime in next week" },
    ],
    "VerbalAbility-Test-6": [
      {statements: [" Direction (Q.Nos. 1 - 4)", "Read each sentence to find out whether there is any grammatical error in it. The error, if any will be in one part of the sentence. The letter of that part is the answer. If there is no error, the answer is 'D'. (Ignore the errors of punctuation, if any)."], question: "(solve as per the direction given above)", options: ["Scarcely had", "I arrived than", "the train left.", "No Error"], answer: "I arrived than"},
      { question: "(solve as per the direction given above)", options: ["No sooner did I open the door", "when the rain, heavy and stormy, rushed in", "making us shiver from head to foot", "No error."], answer: "when the rain, heavy and stormy, rushed in" },
      { question: "(solve as per the direction given above)", options: ["A lot of travel delay is caused", "due to the inefficiency and lack of good management", "on behalf of the railways.", "No error."], answer: "on behalf of the railways." },
      { question: "(solve as per the direction given above)", options: ["Kamala's fountain-pen", "is as expensive", "as Shyama." , "No error."], answer: "as Shyama." },
      {statements: [" Direction (Q.No. 5)", "Find the correctly spelt words."], question: "(solve as per the direction given above)", options: ["Friming", "Burnning", "Running", "Fryng"], answer: "Running"},
    ],
    "VerbalAbility-Test-7": [
      {statements: [" Direction (Q.Nos. 1 - 5)", "Pick out the most effective word(s) from the given words to fill in the blank to make the sentence meaningfully complete."], question: "In high school many of us never realised the importance that grammar would ...... in later life.", options: ["figure", "portray", "play", "exercise"], answer: "play"},
      { question: "Physically we are now all neighbors, but psychologically. we are ...... to each other.", options: ["primitives", "complimentary", "strangers", "cowards"], answer: "strangers" },
      { question: "The robbers were arrested and ...... prison yesterday.", options: ["brought into", "brought to", "taken into", "taken to"], answer: "taken to" },
      { question: "He is a person of sound character and ...... disposition.", options: ["beneficent", "morous", "amiable", "amicable"], answer: "amiable" },
      { question: "This, partly, explains how the Mehta family has been able to ...... its lavish lifestyle in recent times, despite the fact that all its assets have been ......", options: ["keep, removed", "afford, attached", "develop, liquidated", "keep up, destroyed"], answer: "keep up, destroyed" },
    ],
    "VerbalAbility-Test-8": [
      {statements: [" Direction (Q.Nos. 1 - 2)", "Read each sentence to find out whether there is any grammatical error in it. The error, if any will be in one part of the sentence. The letter of that part is the answer. If there is no error, the answer is 'D'. (Ignore the errors of punctuation, if any)."], question: "(solve as per the direction given above)", options: ["The charges in this hospital", "are less than", "the hospital near my house.", "No Error"], answer: "the hospital near my house."},
      { question: "(solve as per the direction given above)", options: ["Even though the shirt is rather expensive", "but I wish to", "purchase it with my own money.", "No error."], answer: "but I wish to" },
      {statements: [" Direction (Q.Nos. 3 - 4)", "Read each sentence to find out whether there is any grammatical error in it. The error, if any will be in one part of the sentence. The letter of that part is the answer. If there is no error, the answer is 'D'. (Ignore the errors of punctuation, if any)."], question: "(solve as per the direction given above)", options: ["His father promised to", "give him anything what he", "wants if he", "passes in the examination.", "No Error"], answer: "give him anything what he"},
      { question: "(solve as per the direction given above)", options: ["After listening to", "his advice, I", "decided to not to", "go abroad for studies.", "No error."], answer: "decided to not to" },
      {statements: [" Direction (Q.No. 5)", "In the following the questions choose the word which best expresses the meaning of the given word."], question: "MELD", options: ["To soothe", "Merge", "Purchase", "Glisten"], answer: "Merge"},
      
    ],
    "VerbalAbility-Test-9": [
      {statements: [" Direction (Q.Nos. 1 - 4)", "Read each sentence to find out whether there is any grammatical error in it. The error, if any will be in one part of the sentence. The letter of that part is the answer. If there is no error, the answer is 'D'. (Ignore the errors of punctuation, if any)."], question: "(solve as per the direction given above)", options: ["Though he stoutly persisted in denying his involvement in the case,", "the facts made it very clear", "that he had hand in the cruel murder of his wife.", "No Error"], answer: "that he had hand in the cruel murder of his wife."},
      { question: "(solve as per the direction given above)", options: ["The tall three girls", "had left", "the day before.", "No error."], answer: "The tall three girls" },
      { question: "(solve as per the direction given above)", options: ["The school is", "within hundred yards", "from the church.", "No error."], answer: "within hundred yards" },
      { question: "(solve as per the direction given above)", options: ["The eminent speaker's speech", "was broadcasted over", "all the major radio-stations.", "No error."], answer: "was broadcasted over" },
      {statements: [" Direction (Q.Nos. 5 - 6)", "Read each sentence to find out whether there is any grammatical error in it. The error, if any will be in one part of the sentence. The letter of that part is the answer. If there is no error, the answer is 'E'. (Ignore the errors of punctuation, if any)."], question: "(solve as per the direction given above)", options: ["The book is making", "waves and the sale", "is quite brisk in", "all major cities.", "No Error"], answer: "is quite brisk in"},
      { question: "(solve as per the direction given above)", options: ["While luminaries of the dance world", "have a dearth of opportunities to display their art", "upcoming dancers suffer from", "an unfortunate lack of exposure.", "No error."], answer: "have a dearth of opportunities to display their art" },
    ],
    "VerbalAbility-Test-10": [
      {statements: [" Direction (Q.No. 1)", "Read each sentence to find out whether there is any grammatical error in it. The error, if any will be in one part of the sentence. The letter of that part is the answer. If there is no error, the answer is 'D'. (Ignore the errors of punctuation, if any)."], question: "(solve as per the direction given above)", options: ["She sang", "very well", "isn't it?", "No Error"], answer: "isn't it?"},
      {statements: [" Direction (Q.Nos. 2 - 5)", "Read each sentence to find out whether there is any grammatical error in it. The error, if any will be in one part of the sentence. The letter of that part is the answer. If there is no error, the answer is 'E'. (Ignore the errors of punctuation, if any)."], question: "(solve as per the direction given above)", options: ["In spite of his", "being a Quiz Master", "show was", "a big flop.", "No Error"], answer: "show was"},
      { question: "(solve as per the direction given above)", options: ["The patient recover", "so fast that", "the expert doctors", "also were surprised.", "No error."], answer: "The patient recover" },
      { question: "(solve as per the direction given above)", options: ["He deserted the path of honour", "in order to", "satisfy his ambition", "and then went down his doom very quickly.", "No error."], answer: "and then went down his doom very quickly." },
      { question: "(solve as per the direction given above)", options: ["Looking forward", "to seeing", "you", "soon", "No error."], answer: "to seeing" },
    ],
    // Add more English papers...
  },

  logicalreasoningtest: {
    "LogicalReasoning-Test-1": [
      {statements: [" Direction (Q.No. 1)", "Each question has an underlined word followed by four answer choices. You will choose the word that is a necessary part of the underlined word."], question: "diploma", options: ["principal", "curriculum", "employment", "graduation"], answer: "graduation"},
      {statements: [" Direction (Q.No. 2)", "Every one of the following questions consists of a related pair of words, followed by five pairs of words. Choose the pair that best represents a similar relationship to the one expressed in the original pair of words."], question: "DIVISION : SECTION", options: ["layer : tier", "tether : bundle", "chapter : verse", "riser : stage", "dais : speaker"], answer: "layer : tier"},
      {statements: [" Direction (Q.No. 3)", "Choose the statement that is best supported by the information given in the question passage."], question: "Yoga has become a very popular type of exercise, but it may not be for everyone. Before you sign yourself up for a yoga class, you need to examine what it is you want from your fitness routine. If you're looking for a high-energy, fast-paced aerobic workout, a yoga class might not be your best choice.This paragraph best supports the statement that", options: ["yoga is more popular than high-impact aerobics.", "before embarking on a new exercise regimen, you should think about your needs and desires.", "yoga is changing the world of fitness in major ways", "yoga benefits your body and mind", "most people think that yoga isn't a rigorous form of exercise."], answer: "before embarking on a new exercise regimen, you should think about your needs and desires."},
      {statements: [" Direction (Q.No. 4)", "First, you will be given a list of three 'nonsense' words and their English word meanings. The question(s) that follow will ask you to reverse the process and translate an English word into the artificial language."], question: "Here are some words translated from an artificial language.<br>hapllesh means cloudburst<br>srenchoch means pinball<br>resbosrench means ninepin<br>Which word could mean 'cloud nine'?", options: ["leshsrench", "ochhapl", "haploch", "haplresbo"], answer: "haplresbo"},
      {statements: [" Direction (Q.No. 5)", "Translate from an imaginary language into English. Then, look for the word elements that appear both on the list and in the answer choices."], question: "Here are some words translated from an artificial language.<br>malgauper means peach cobbler<br>malgaport means peach juice<br>moggagrop means apple jelly<br>Which word could mean 'apple juice'?", options: ["moggaport", "malgaauper", "gropport", "moggagrop"], answer: "moggaport"},
    ],
    "LogicalReasoning-Test-2": [
      {statements: [" Direction (Q.No. 1)", "Each problem consists of three statements. Based on the first two statements, the third statement may be true, false, or uncertain."], question: "Spot is bigger than King and smaller than Sugar.<br>Ralph is smaller than Sugar and bigger than Spot.<br>King is bigger than Ralph.<br>If the first two statements are true, the third statement is", options: ["true", "false", "uncertain"], answer: "false"},
      {statements: [" Direction (Q.No. 2)", "Each problem consists of three statements. Based on the first two statements, the third statement may be true, false, or uncertain."], question: "All the trees in the park are flowering trees.<br>Some of the trees in the park are dogwoods.<br>All dogwoods in the park are flowering trees.<br>If the first two statements are true, the third statement is", options: ["true", "false", "uncertain"], answer: "true"},
      {statements: [" Direction (Q.Nos. 3 - 4)", "Each of the following questions contains a small paragraph followed by a question on it. Read each paragraph carefully and answer the question given below it."], question: "The virtue of art does not allow the work to be interfered with or immediately ruled by anything other than itself. It insists that it alone shall touch the work in order to bring it into being. Art requires that nothing shall attain the work except through art itself.<br>This passage best supports the statement that:", options: ["art is governed by external rules and conditions.", "art is for the sake of art and life.", "art is for the sake of art alone.", "artist realises his dreams through his artistic creation.", "artist should use his art for the sake of society."], answer: "art is for the sake of art alone."},
      {question: "The consumption of harmful drugs by the people can be prevented not only by banning their sale in the market but also by instructing users about their dangerous effects which they must understand for their safety. Also the drug addicts may be provided with proper medical facilities for their rehabilitation. This will help in scaling down the use of drugs.<br>The passage best supports the statement that consumption of harmful drugs -", options: ["are on increase in the society.", "can always be reduced.", "are due to lack of medical facilities.", "can be eliminated with the help of banning their sale.", "may be channelized through proper system."], answer: "can be eliminated with the help of banning their sale."},
      {statements: [" Direction (Q.No. 5)", "In each of the following questions, a statement/group of statements is given followed by some conclusions. Without resolving anything yourself choose the conclusion which logically follows from the given statements)."], question: "To pass the examination, one must work hard.", options: ["Examination is related with hard work.", "All those who work hard, pass.", "Examination causes some anxiety and those who work hard overcome it.", "Without hard work, one does not pass."], answer: "Without hard work, one does not pass."},
    ],
    "LogicalReasoning-Test-3": [
      {statements: [" Direction (Q.No. 1)", "Remember, you are looking for the word that does NOT belong in the same group as the others. Sometimes, all four words seem to fit in the same group. If so, look more closely to further narrow your classification."], question: "Which word does NOT belong with the others?", options: ["wing", "fin", "beak", "rubber"], answer: "beak"},
      {statements: [" Direction (Q.No. 2)", "First, you will be given a list of three 'nonsense' words and their English word meanings. The question(s) that follow will ask you to reverse the process and translate an English word into the artificial language."], question: "Here are some words translated from an artificial language.<br>lelibroon means yellow hat<br>plekafroti means flower garden<br>frotimix means garden salad<br>Which word could mean 'yellow flower'?", options: ["lelifroti", "lelipleka", "plekabroon", "frotibroon"], answer: "lelipleka"},
      {statements: [" Direction (Q.No. 3)", "Find the statement that must be true according to the given information."], question: "Georgia is older than her cousin Marsha. Marsha's brother Bart is older than Georgia. When Marsha and Bart are visiting with Georgia, all three like to play a game of Monopoly. Marsha wins more often than Georgia does.", options: ["When he plays Monopoly with Marsha and Georgia, Bart often loses.", "Of the three, Georgia is the oldest.", "Georgia hates to lose at Monopoly.", "Of the three, Marsha is the youngest."], answer: "Of the three, Marsha is the youngest."},
      {statements: [" Direction (Q.Nos. 4 - 5)", "Each problem consists of three statements. Based on the first two statements, the third statement may be true, false, or uncertain."], question: "Tom puts on his socks before he puts on his shoes.<br>He puts on his shirt before he puts on his jacket.<br>Tom puts on his shoes before he puts on his shirt.<br>If the first two statements are true, the third statement is", options: ["true", "false", "uncertain"], answer: "uncertain"},
      {question: "The bookstore has a better selection of postcards than the newsstand does.<br>The selection of postcards at the drugstore is better than at the bookstore.<br>The drugstore has a better selection of postcards than the bookstore or the newsstand.<br>If the first two statements are true, the third statement is", options: ["true", "false", "uncertain"], answer: "true"},
    ],
    "LogicalReasoning-Test-4": [
      {statements: [" Direction (Q.Nos. 1 - 2)", "In these series, you will be looking at both the letter pattern and the number pattern. Fill the blank in the middle of the series or end of the series."], question: "JAK, KBL, LCM, MDN, _____", options: ["OEP", "NEO", "MEN", "PFQ"], answer: "NEO"},
      {question: "SCD, TEF, UGH, ____, WKL", options: ["CMN", "UJI", "VIJ", "IJT"], answer: "VIJ"},
      {statements: [" Direction (Q.No. 3)", "Find the word that names a necessary part of the underlined word."], question: "purchase", options: ["trade", "money", "bank", "acquisition"], answer: "acquisition"},
      {statements: [" Direction (Q.No. 4)", "Every one of the following questions consists of a related pair of words, followed by five pairs of words. Choose the pair that best represents a similar relationship to the one expressed in the original pair of words."], question: "PULSATE : THROB", options: ["walk : run", "tired : sleep", "examine : scrutinize", "ballet : dancer", "find : lose"], answer: "examine : scrutinize"},
      {statements: [" Direction (Q.No. 5)", "First, you will be given a list of three 'nonsense' words and their English word meanings. The question(s) that follow will ask you to reverse the process and translate an English word into the artificial language."], question: "Here are some words translated from an artificial language.<br>dionot means oak tree<br>blyonot means oak leaf<br>blycrin means maple leaf<br>Which word could mean 'maple syrup'?", options: ["blymuth", "hupponot", "patricrin", "crinweel"], answer: "patricrin"},
    ],
    "LogicalReasoning-Test-5": [
      {statements: [" Direction (Q.Nos. 1 - 2)", "Translate from an imaginary language into English. Then, look for the word elements that appear both on the list and in the answer choices."], question: "Here are some words translated from an artificial language.<br>slar means jump<br>slary means jumping<br>slarend means jumped<br>Which word could mean 'playing'?", options: ["clargslarend", "clargy", "ellaclarg", "slarmont"], answer: "clargy"},
      {question: "Here are some words translated from an artificial language.<br>plekapaki means fruitcake<br>pakishillen means cakewalk<br>treftalan means buttercup<brWhich word could mean 'cupcake'?", options: ["shillenalan", "treftpleka", "pakitreft", "alanpaki"], answer: "alanpaki"},
      {statements: [" Direction (Q.No. 3)", "Each question presents a situation and asks you to make a judgment regarding that particular circumstance. Choose an answer based on given information."], question: "Eileen is planning a special birthday dinner for her husband's 35th birthday. She wants the evening to be memorable, but her husband is a simple man who would rather be in jeans at a baseball game than in a suit at a fancy restaurant. Which restaurant below should Eileen choose?", options: ["Alfredo's offers fine Italian cuisine and an elegant Tuscan decor. Patrons will feel as though they've spent the evening in a luxurious Italian villa.", "Pancho's Mexican Buffet is an all-you-can-eat family style smorgasbord with the best tacos in town.", "The Parisian Bistro is a four-star French restaurant where guests are treated like royalty. Chef Dilbert Olay is famous for his beef bourguignon.", "Marty's serves delicious, hearty meals in a charming setting reminiscent of a baseball clubhouse in honor of the owner,Marty Lester, a former major league baseball all-star."], answer: "Marty's serves delicious, hearty meals in a charming setting reminiscent of a baseball clubhouse in honor of the owner,Marty Lester, a former major league baseball all-star."},
      {statements: [" Direction (Q.No. 4)", "Read the below passage carefully and answer the questions:", "Quinn: Our state is considering raising the age at which a person can get a driver's license to eighteen. This is unfair because the age has been sixteen for many years and sixteen-year-olds today are no less responsible than their parents and grandparents were at sixteen.Many young people today who are fourteen and fifteen years old are preparing to receive their licenses by driving with a learner's permit and a licensed driver, usually one of their parents. It would not be fair to suddenly say they have to wait two more years.", "Quinn: Our state is considering raising the age at which a person can get a driver's license to eighteen. This is unfair because the age has been sixteen for many years and sixteen-year-olds today are no less responsible than their parents and grandparents were at sixteen.Many young people today who are fourteen and fifteen years old are preparing to receive their licenses by driving with a learner's permit and a licensed driver, usually one of their parents. It would not be fair to suddenly say they have to wait two more years."], question: "On what does Quinn rely in making her argument?", options: ["statistics", "emotion", "fairness", "actualities", "anecdotes"], answer: "fairness"},
      {statements: [" Direction (Q.No. 5)", "Three of the words will be in the same classification, the remaining one will not be. Your answer will be the one word that does NOT belong in the same classification as the others."], question: "Which word does NOT belong with the others?", options: ["leopard", "cougar", "elephant", "lion"], answer: "elephant"},
    ],
    "LogicalReasoning-Test-6": [
      {statements: [" Direction (Q.No. 1)", "Each question has an underlined word followed by four answer choices. You will choose the word that is a necessary part of the underlined word."], question: "diploma", options: ["principal", "curriculum", "employment", "graduation"], answer: "graduation"},
      {statements: [" Direction (Q.No. 2)", "Every one of the following questions consists of a related pair of words, followed by five pairs of words. Choose the pair that best represents a similar relationship to the one expressed in the original pair of words."], question: "DIVISION : SECTION", options: ["layer : tier", "tether : bundle", "chapter : verse", "riser : stage", "dais : speaker"], answer: "layer : tier"},
      {statements: [" Direction (Q.No. 3)", "Choose the statement that is best supported by the information given in the question passage."], question: "Yoga has become a very popular type of exercise, but it may not be for everyone. Before you sign yourself up for a yoga class, you need to examine what it is you want from your fitness routine. If you're looking for a high-energy, fast-paced aerobic workout, a yoga class might not be your best choice.This paragraph best supports the statement that", options: ["yoga is more popular than high-impact aerobics.", "before embarking on a new exercise regimen, you should think about your needs and desires.", "yoga is changing the world of fitness in major ways", "yoga benefits your body and mind", "most people think that yoga isn't a rigorous form of exercise."], answer: "before embarking on a new exercise regimen, you should think about your needs and desires."},
      {statements: [" Direction (Q.No. 4)", "First, you will be given a list of three 'nonsense' words and their English word meanings. The question(s) that follow will ask you to reverse the process and translate an English word into the artificial language."], question: "Here are some words translated from an artificial language.<br>hapllesh means cloudburst<br>srenchoch means pinball<br>resbosrench means ninepin<br>Which word could mean 'cloud nine'?", options: ["leshsrench", "ochhapl", "haploch", "haplresbo"], answer: "haplresbo"},
      {statements: [" Direction (Q.No. 5)", "Translate from an imaginary language into English. Then, look for the word elements that appear both on the list and in the answer choices."], question: "Here are some words translated from an artificial language.<br>malgauper means peach cobbler<br>malgaport means peach juice<br>moggagrop means apple jelly<br>Which word could mean 'apple juice'?", options: ["moggaport", "malgaauper", "gropport", "moggagrop"], answer: "moggaport"},
    ],
    "LogicalReasoning-Test-7": [
      {statements: [" Direction (Q.No. 1)", "Each problem consists of three statements. Based on the first two statements, the third statement may be true, false, or uncertain."], question: "Spot is bigger than King and smaller than Sugar.<br>Ralph is smaller than Sugar and bigger than Spot.<br>King is bigger than Ralph.<br>If the first two statements are true, the third statement is", options: ["true", "false", "uncertain"], answer: "false"},
      {statements: [" Direction (Q.No. 2)", "Each problem consists of three statements. Based on the first two statements, the third statement may be true, false, or uncertain."], question: "All the trees in the park are flowering trees.<br>Some of the trees in the park are dogwoods.<br>All dogwoods in the park are flowering trees.<br>If the first two statements are true, the third statement is", options: ["true", "false", "uncertain"], answer: "true"},
      {statements: [" Direction (Q.Nos. 3 - 4)", "Each of the following questions contains a small paragraph followed by a question on it. Read each paragraph carefully and answer the question given below it."], question: "The virtue of art does not allow the work to be interfered with or immediately ruled by anything other than itself. It insists that it alone shall touch the work in order to bring it into being. Art requires that nothing shall attain the work except through art itself.<br>This passage best supports the statement that:", options: ["art is governed by external rules and conditions.", "art is for the sake of art and life.", "art is for the sake of art alone.", "artist realises his dreams through his artistic creation.", "artist should use his art for the sake of society."], answer: "art is for the sake of art alone."},
      {question: "The consumption of harmful drugs by the people can be prevented not only by banning their sale in the market but also by instructing users about their dangerous effects which they must understand for their safety. Also the drug addicts may be provided with proper medical facilities for their rehabilitation. This will help in scaling down the use of drugs.<br>The passage best supports the statement that consumption of harmful drugs -", options: ["are on increase in the society.", "can always be reduced.", "are due to lack of medical facilities.", "can be eliminated with the help of banning their sale.", "may be channelized through proper system."], answer: "can be eliminated with the help of banning their sale."},
      {statements: [" Direction (Q.No. 5)", "In each of the following questions, a statement/group of statements is given followed by some conclusions. Without resolving anything yourself choose the conclusion which logically follows from the given statements)."], question: "To pass the examination, one must work hard.", options: ["Examination is related with hard work.", "All those who work hard, pass.", "Examination causes some anxiety and those who work hard overcome it.", "Without hard work, one does not pass."], answer: "Without hard work, one does not pass."},
    ],
    "LogicalReasoning-Test-8": [
      {statements: [" Direction (Q.No. 1)", "Remember, you are looking for the word that does NOT belong in the same group as the others. Sometimes, all four words seem to fit in the same group. If so, look more closely to further narrow your classification."], question: "Which word does NOT belong with the others?", options: ["wing", "fin", "beak", "rubber"], answer: "beak"},
      {statements: [" Direction (Q.No. 2)", "First, you will be given a list of three 'nonsense' words and their English word meanings. The question(s) that follow will ask you to reverse the process and translate an English word into the artificial language."], question: "Here are some words translated from an artificial language.<br>lelibroon means yellow hat<br>plekafroti means flower garden<br>frotimix means garden salad<br>Which word could mean 'yellow flower'?", options: ["lelifroti", "lelipleka", "plekabroon", "frotibroon"], answer: "lelipleka"},
      {statements: [" Direction (Q.No. 3)", "Find the statement that must be true according to the given information."], question: "Georgia is older than her cousin Marsha. Marsha's brother Bart is older than Georgia. When Marsha and Bart are visiting with Georgia, all three like to play a game of Monopoly. Marsha wins more often than Georgia does.", options: ["When he plays Monopoly with Marsha and Georgia, Bart often loses.", "Of the three, Georgia is the oldest.", "Georgia hates to lose at Monopoly.", "Of the three, Marsha is the youngest."], answer: "Of the three, Marsha is the youngest."},
      {statements: [" Direction (Q.Nos. 4 - 5)", "Each problem consists of three statements. Based on the first two statements, the third statement may be true, false, or uncertain."], question: "Tom puts on his socks before he puts on his shoes.<br>He puts on his shirt before he puts on his jacket.<br>Tom puts on his shoes before he puts on his shirt.<br>If the first two statements are true, the third statement is", options: ["true", "false", "uncertain"], answer: "uncertain"},
      {question: "The bookstore has a better selection of postcards than the newsstand does.<br>The selection of postcards at the drugstore is better than at the bookstore.<br>The drugstore has a better selection of postcards than the bookstore or the newsstand.<br>If the first two statements are true, the third statement is", options: ["true", "false", "uncertain"], answer: "true"},
    ],
    "LogicalReasoning-Test-9": [
      {statements: [" Direction (Q.Nos. 1 - 2)", "In these series, you will be looking at both the letter pattern and the number pattern. Fill the blank in the middle of the series or end of the series."], question: "JAK, KBL, LCM, MDN, _____", options: ["OEP", "NEO", "MEN", "PFQ"], answer: "NEO"},
      {question: "SCD, TEF, UGH, ____, WKL", options: ["CMN", "UJI", "VIJ", "IJT"], answer: "VIJ"},
      {statements: [" Direction (Q.No. 3)", "Find the word that names a necessary part of the underlined word."], question: "purchase", options: ["trade", "money", "bank", "acquisition"], answer: "acquisition"},
      {statements: [" Direction (Q.No. 4)", "Every one of the following questions consists of a related pair of words, followed by five pairs of words. Choose the pair that best represents a similar relationship to the one expressed in the original pair of words."], question: "PULSATE : THROB", options: ["walk : run", "tired : sleep", "examine : scrutinize", "ballet : dancer", "find : lose"], answer: "examine : scrutinize"},
      {statements: [" Direction (Q.No. 5)", "First, you will be given a list of three 'nonsense' words and their English word meanings. The question(s) that follow will ask you to reverse the process and translate an English word into the artificial language."], question: "Here are some words translated from an artificial language.<br>dionot means oak tree<br>blyonot means oak leaf<br>blycrin means maple leaf<br>Which word could mean 'maple syrup'?", options: ["blymuth", "hupponot", "patricrin", "crinweel"], answer: "patricrin"},
    ],
    "LogicalReasoning-Test-10": [
      {statements: [" Direction (Q.Nos. 1 - 2)", "Translate from an imaginary language into English. Then, look for the word elements that appear both on the list and in the answer choices."], question: "Here are some words translated from an artificial language.<br>slar means jump<br>slary means jumping<br>slarend means jumped<br>Which word could mean 'playing'?", options: ["clargslarend", "clargy", "ellaclarg", "slarmont"], answer: "clargy"},
      {question: "Here are some words translated from an artificial language.<br>plekapaki means fruitcake<br>pakishillen means cakewalk<br>treftalan means buttercup<brWhich word could mean 'cupcake'?", options: ["shillenalan", "treftpleka", "pakitreft", "alanpaki"], answer: "alanpaki"},
      {statements: [" Direction (Q.No. 3)", "Each question presents a situation and asks you to make a judgment regarding that particular circumstance. Choose an answer based on given information."], question: "Eileen is planning a special birthday dinner for her husband's 35th birthday. She wants the evening to be memorable, but her husband is a simple man who would rather be in jeans at a baseball game than in a suit at a fancy restaurant. Which restaurant below should Eileen choose?", options: ["Alfredo's offers fine Italian cuisine and an elegant Tuscan decor. Patrons will feel as though they've spent the evening in a luxurious Italian villa.", "Pancho's Mexican Buffet is an all-you-can-eat family style smorgasbord with the best tacos in town.", "The Parisian Bistro is a four-star French restaurant where guests are treated like royalty. Chef Dilbert Olay is famous for his beef bourguignon.", "Marty's serves delicious, hearty meals in a charming setting reminiscent of a baseball clubhouse in honor of the owner,Marty Lester, a former major league baseball all-star."], answer: "Marty's serves delicious, hearty meals in a charming setting reminiscent of a baseball clubhouse in honor of the owner,Marty Lester, a former major league baseball all-star."},
      {statements: [" Direction (Q.No. 4)", "Read the below passage carefully and answer the questions:", "Quinn: Our state is considering raising the age at which a person can get a driver's license to eighteen. This is unfair because the age has been sixteen for many years and sixteen-year-olds today are no less responsible than their parents and grandparents were at sixteen.Many young people today who are fourteen and fifteen years old are preparing to receive their licenses by driving with a learner's permit and a licensed driver, usually one of their parents. It would not be fair to suddenly say they have to wait two more years.", "Quinn: Our state is considering raising the age at which a person can get a driver's license to eighteen. This is unfair because the age has been sixteen for many years and sixteen-year-olds today are no less responsible than their parents and grandparents were at sixteen.Many young people today who are fourteen and fifteen years old are preparing to receive their licenses by driving with a learner's permit and a licensed driver, usually one of their parents. It would not be fair to suddenly say they have to wait two more years."], question: "On what does Quinn rely in making her argument?", options: ["statistics", "emotion", "fairness", "actualities", "anecdotes"], answer: "fairness"},
      {statements: [" Direction (Q.No. 5)", "Three of the words will be in the same classification, the remaining one will not be. Your answer will be the one word that does NOT belong in the same classification as the others."], question: "Which word does NOT belong with the others?", options: ["leopard", "cougar", "elephant", "lion"], answer: "elephant"},
    ],
    // Add more math papers...
  },
};

const TestPage = () => {
  const { fieldname, papername } = useParams();
  const [timeLeft, setTimeLeft] = useState(1800); // 30 minutes in seconds
  const [userAnswers, setUserAnswers] = useState([]);
  const [score, setScore] = useState(null);
  const navigate = useNavigate();

  const questions = questionsData[fieldname]?.[papername] || [];

  useEffect(() => {
    if (timeLeft === 0) {
      submitTest();
    }
    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft]);

  const submitTest = () => {
    let calculatedScore = 0;
    questions.forEach((question, index) => {
      if (userAnswers[index] === question.answer) {
        calculatedScore++;
      }
    });

    setScore(calculatedScore);

    // Store the result in local storage
    const results = JSON.parse(localStorage.getItem('testResults')) || [];
    results.push({ fieldname, papername, score: calculatedScore });
    localStorage.setItem('testResults', JSON.stringify(results));

    navigate(`/${fieldname}/${papername}/results`, { state: { score: calculatedScore, answers: userAnswers } });
  };

  const handleOptionChange = (questionIndex, selectedOption) => {
    const updatedAnswers = [...userAnswers];
    updatedAnswers[questionIndex] = selectedOption;
    setUserAnswers(updatedAnswers);
  };

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 dark:bg-gray-900">
      <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-xl">
        <h1 className="text-3xl font-bold mb-4 text-gray-800 dark:text-white">Test: {papername.replace('-', ' ')}</h1>
        <p className="mb-4 text-gray-600 dark:text-gray-300">Time Remaining: {minutes}:{seconds < 10 ? `0${seconds}` : seconds}</p>
        
        {questions.map((question, index) => (
          <div key={index} className="mb-6">
            {question.statements && (
              <div className="mb-4">
                {question.statements.map((statement, sIndex) => (
                  <p key={sIndex} className="text-gray-800 dark:text-gray-300">{statement}</p>
                ))}
              </div>
            )}

            <h2 className="font-semibold mb-2 text-gray-800 dark:text-white">
              {index + 1}. <span dangerouslySetInnerHTML={{ __html: question.question }} />
            </h2>

            {question.options.map((option, optionIndex) => (
              <label key={optionIndex} className="block mb-1">
                <input
                  type="radio"
                  name={`question-${index}`}
                  value={option}
                  checked={userAnswers[index] === option}
                  onChange={() => handleOptionChange(index, option)}
                  className="mr-2"
                />
                <span className="text-gray-800 dark:text-gray-300">{option}</span>
              </label>
            ))}
          </div>
        ))}

        <button
          onClick={submitTest}
          className="px-6 py-2 bg-blue-600 dark:bg-blue-700 text-white rounded-lg hover:bg-blue-700 dark:hover:bg-blue-800 transition-colors"
        >
          Submit Test
        </button>
      </div>
    </div>
  );
};

export default TestPage;