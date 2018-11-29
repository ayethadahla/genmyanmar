if (self.CavalryLogger) { CavalryLogger.start_js(["PQj8c"]); }

__d("JobConstants",[],(function(a,b,c,d,e,f){e.exports={JOB_APPLICATION_TRACKING_SYSTEM_PAGINATE_COUNT:10,JOB_BROWSER_LOCATION_MAX_RADIUS_MILES:100,JOB_BROWSER_LOCATION_MIN_RADIUS_MILES:2,JOB_BROWSER_LOCATION_MAX_RADIUS_KM:150,JOB_BROWSER_LOCATION_MIN_RADIUS_KM:2,JOB_BROWSER_PAGINATE_JOB_COUNT:10,JOB_POST_EXPIRATION_REMINDER_OFFSET:604800,JOB_POST_DEFAULT_DAYS_TILL_EXPIRATION:30,JOB_POST_EXPIRATION_TIME:2592e3,JOB_POST_LIMIT_PER_DAY:10,JOB_URL_DEFAULT_FILTER_VALUE_ALL:"all",JOB_URL_DEFAULT_FILTER_VALUE_NEARBY:"nearby",JOB_URL_MULTIPLE_FILTER_DELIMITER:".",JOB_URL_NAME_ID_SEPARATOR:"-",JOB_APPLICATION_ABANDON_SURVEY_INTEGRATION_POINT_ID:189507891530064,JOB_EMAIL_REGEX_STRING:"[A-Za-z0-9_!#$%&'*+/=?^`{|}~-]+(?:\\.[A-Za-z0-9_!#$%&'*+/=?^`{|}~-]+)*@(?:[A-Za-z0-9](?:[A-Za-z0-9-]*[A-Za-z0-9])?\\.)+[A-Za-z0-9](?:[A-Za-z0-9-]*[A-Za-z0-9])?",COVER_PHOTO_HEIGHT_WIDTH_RATIO:.56,JOBS_LOCATION_TYPEAHEAD_PRODUCT_TAG:"job_search",JOB_BROWSER_JOB_OPENING_PHOTO_HEIGHT:250,JOB_BROWSER_JOB_OPENING_PHOTO_WIDTH:476,JOB_BROWSER_EMPLOYER_PHOTO_SIZE:40,JOB_BROWSER_DEFAULT_RADIUS_METERS:64e3,CUSTOM_RESPONSE_HEADER:"customResponse",JOB_OPENING_MARK_AS_CLOSED_SURVEY_INTEGRATION_POINT_ID:836188723200866,SIMILAR_JOBS_NUM_FETCH:5,JOB_INTERVIEW_DEFAULT_DURATION_MINUTES:30,JOBS_COMPOSER_COVER_PHOTO_HEIGHT:245,JOBS_COMPOSER_COVER_PHOTO_WIDTH:470,JOBS_COMPOSER_PROFILE_PICTURE_SIZE:90,JOBS_POLICY_LINK:"https://www.facebook.com/policies/pages_groups_events/jobs_on_pages",JOB_OPENING_DETAIL_VIEW_JOB_PHOTO_HEIGHT:260,JOB_OPENING_DETAIL_VIEW_JOB_PHOTO_WIDTH:500,JOB_OPENING_DETAIL_VIEW_EMPLOYER_PHOTO_SIZE:80,JOB_POSTS_ITEM_JOB_PHOTO_WIDTH:155,JOB_POSTS_ITEM_JOB_PHOTO_HEIGHT:80,JOB_POSTS_EMPTY_VIEW_IMAGE_WIDTH:130,JOB_POSTS_EMPTY_VIEW_IMAGE_HEIGHT:80,PAGE_JOBS_TAB_PAGINATE_JOB_COUNT:10,JOB_DETAIL_VIEW_SEND_FEEDBACK_FORM_ID:128404151166229,SUGGESTED_JOB_IMAGE_SIZE:64,JOBS_SHARESHEET_QE_UNIVERSE:"jobs_sharesheet",JOBS_COMPOSER_HIDE_PREVIEW_QE_UNIVERSE:"jobs_composer_hide_preview",JOBS_COMPOSER_SALARY_INPUT_QE_UNIVERSE:"jobs_composer_salary_input"}}),null);
__d("MegaphoneCard.react",["ix","cx","xuiglyph","Image.react","React","XUICard.react","XUICardHeader.react","XUICardHeaderTitle.react","XUICardSection.react"],(function(a,b,c,d,e,f,g,h,i){"use strict";__p&&__p();var j;c=b("React").PropTypes;d=babelHelpers.inherits(a,b("React").Component);j=d&&d.prototype;function a(){var a,c;for(var d=arguments.length,e=new Array(d),f=0;f<d;f++)e[f]=arguments[f];return c=(a=j.constructor).call.apply(a,[this].concat(e)),this.state={shown:this.props.shown},this.$1=function(){this.setState({shown:!1}),this.props.onClose&&this.props.onClose()}.bind(this),this.$2=function(){return b("React").createElement("a",{href:"#",onClick:this.$1},b("React").createElement(b("Image.react"),{src:g("88985")}))}.bind(this),c}a.prototype.componentDidMount=function(){this.props.shown&&this.props.onShow&&this.props.onShow()};a.prototype.render=function(){return!this.state.shown?null:b("React").createElement(b("XUICard.react"),null,b("React").createElement(b("XUICardHeader.react"),{type:"secondary",link:this.$2()},b("React").createElement(b("XUICardHeaderTitle.react"),null,this.props.title)),b("React").createElement(b("XUICardSection.react"),{className:"_3i5e"},this.props.children))};a.propTypes={onClose:c.func,onShow:c.func,title:c.string.isRequired,shown:c.bool.isRequired};e.exports=a}),null);
__d("JobSearchStrings",["fbt","JobConstants","Link.react","React"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();e.exports={CONFIRM_SAVE_TITLE:g._("Confirm"),INVALID_DATE_ALERT_TITLE:g._("Please Change Dates"),END_DATE_BEFORE_START_DATE_MSG:g._("Please correct the dates of your experience so the end date is after the start date."),GENERIC_ERROR_TITLE:g._("Sorry, something went wrong."),GENERIC_ERROR_MESSAGE:g._("We're working on it - try again shortly."),SCHOOL_CHANGE_PROMPT:function(a){return g._("Would you like to save the changes you made to your education at {school name}?",[g._param("school name",a)])},WORK_CHANGE_PROMPT:function(a){return g._("Would you like to save the changes you made to your experience at {company name}?",[g._param("company name",a)])},REMOVE_EDUCATION:g._("Remove Education"),REMOVE_EDUCATION_PROMPT:function(a){if(!a)return g._("Are you sure you want to remove this education experience from your job application?");else return g._("Are you sure you want to remove your education at {school name} from this job application?",[g._param("school name",a)])},REMOVE_EXPERIENCE:g._("Remove Experience"),REMOVE_EXPERIENCE_PROMPT:function(a){if(!a)return g._("Are you sure you want to remove this experience from your job application?");else return g._("Are you sure you want to remove your experience at {company name} from this job application?",[g._param("company name",a)])},FROM_LABEL:g._("From"),TO_LABEL:g._("to"),APPEAL_COMFIRMATION:g._("We'll respond to your appeal shortly. In the mean time you can check the status of your appeal in your support inbox."),REPEATED_APPEAL_ALERT:g._("Your appeal has successfully been submitted and is currently under review."),SCHOOL_NAME:g._("School Name"),AREA_OF_STUDY:g._("Area of Study"),I_CURRENTLY_WORK_HERE:g._("I currently work here"),PRESENT_LABEL:g._("Present"),WHERE_DID_YOU_WORK:g._("Where did you work?"),POSITION_LABEL:g._("Position"),WORK_AND_EDU_SUMMARY_PLACEHOLDER:g._("Description"),ADD_EDUCATION:g._("+ Add Education"),EDUCATION_HEADER:g._("Education"),EDUCATION_HEADER_CAPITALIZED:g._("EDUCATION"),ADD_EXPERIENCE:g._("+ Add Experience"),EXPERIENCE_HEADER:g._("Experience"),EXPERIENCE_HEADER_CAPITALIZED:g._("EXPERIENCE"),DURATION:function(a,b){return g._("{start date} - {end date}",[g._param("start date",a),g._param("end date",b)])},FINISHES_SCHOOL_FUTURE:function(a){return g._("Finishes in {end date}",[g._param("end date",a)])},FINISHED_SCHOOL_PAST:function(a){return g._("Finished in {end date}",[g._param("end date",a)])},SCHOOL_START_FUTURE:function(a){return g._("Will start in {start date}",[g._param("start date",a)])},SCHOOL_START_PAST:function(a){return g._("Started in {start date}",[g._param("start date",a)])},FREE_FORM_INPUT_PROMPT:function(a){return!a?g._("Why do you think you're a good candidate for this position?"):g._("Why do you think you're a good candidate for {employer name}?",[g._param("employer name",a)])},FREE_FORM_INPUT_PLACEHOLDER:g._("Introduce yourself and give an overview of your relevant experience."),CURRENTLY_WORKS_HERE:g._("Currently works here"),WORK_END_FUTURE:function(a){return g._("Works here until {end date}",[g._param("end date",a)])},WORK_END_PAST:function(a){return g._("Worked here until {end date}",[g._param("end date",a)])},WORK_START_PAST:function(a){return g._("Started working here in {start date}",[g._param("start date",a)])},POSITION_AND_EMPLOYER:function(a,b){return g._("{position} at {employer}",[g._param("position",a),g._param("employer",b)])},PAGE_COMPOSER_DISCLAIMER:g._("By publishing, you confirm this job post complies with {=Facebook's Job Policy} (including the anti-discrimination policy) and all applicable laws.",[g._param("=Facebook's Job Policy",b("React").createElement(b("Link.react"),{href:b("JobConstants").JOBS_POLICY_LINK,target:"_blank"},g._("Facebook's Job Policy")))]),POLICY_CONFIRMATION_POPUP_HEADER:g._("Facebook's Job Policy"),POLICY_CONFIRMATION_POPUP_BODY:g._("All jobs posted on Facebook must comply with Facebook's Job Policy (including the anti-discrimination policy) and all applicable laws."),JOBS_ON_PAGES_POLICIES_HEADER:g._("Jobs on Pages Policies"),JOBS_ON_PAGES_POLICIES_BODY:g._("All jobs posted on Facebook must comply with {=Facebook's Job Policy} (including the anti-discrimination policy) and all applicable laws including:",[g._param("=Facebook's Job Policy",b("React").createElement(b("Link.react"),{href:b("JobConstants").JOBS_POLICY_LINK,target:"_blank"},g._("Facebook's Job Policy")))]),JOBS_ON_PAGES_POLICY_FOR_MISLEADING_JOBS:g._("{=Misleading, Deceptive, or Fraudulent Jobs} Job posts must not promote employment opportunities that are misleading, deceptive, or fraudulent.",[g._param("=Misleading, Deceptive, or Fraudulent Jobs",b("React").createElement("h2",null,g._("Misleading, Deceptive, or Fraudulent Jobs")))]),JOBS_ON_PAGES_POLICY_FOR_ILLEGAL_PRODUCTS:g._("{=Illegal Products and Services} Job posts must not promote employment opportunities that involve illegal activity, products, or services.",[g._param("=Illegal Products and Services",b("React").createElement("h2",null,g._("Illegal Products and Services")))]),JOBS_ON_PAGES_POLICY_FOR_DISCRIMINATION:g._("{=Discrimination} Job posts must not unlawfully discriminate against applicants based on any protected characteristics, including, but not limited to, race, ethnicity, color, national origin, religion, age, sex, sexual orientation, gender identity, family status, disability, medical or genetic condition or any other basis protected under federal, state or local law. Job posts must comply with all applicable laws prohibiting discrimination.",[g._param("=Discrimination",b("React").createElement("h2",null,g._("Discrimination")))]),JOBS_ON_PAGES_POLICY_FOR_SEXUALLY_SUGGESTIVE_JOBS:g._("{=Sexually Suggestive Jobs} Job posts must not promote employment opportunities in a sexually suggestive manner.",[g._param("=Sexually Suggestive Jobs",b("React").createElement("h2",null,g._("Sexually Suggestive Jobs")))]),JOBS_ON_PAGES_POLICY_FOR_ADULT_PRODUCTS:g._("{=Adult Products and Services} Job posts must not promote employment opportunities that require adult services or use of adult products.",[g._param("=Adult Products and Services",b("React").createElement("h2",null,g._("Adult Products and Services")))]),JOBS_ON_PAGES_POLICY_FOR_PERSONAL_INFORMATION:g._("{=Personal Information} Job posts must not solicit personal identification or financial information from any potential applicants.",[g._param("=Personal Information",b("React").createElement("h2",null,g._("Personal Information")))]),POLICY_CONFIRMATION_POPUP_CANCEL_DIALOG_BODY:g._("Policy agreement is the last step for posting a job on Facebook. Are you sure you want to cancel?"),POLICY_CONFIRMATION_POPUP_CHECKBOX_TOOLTIP:g._("To continue, select the check to agree to Job's Policies."),POLICY_CONFIRMATION_POPUP_CHECKBOX_LABEL:g._("By publishing, you confirm this job post complies with {=Facebook's Job Policy}",[g._param("=Facebook's Job Policy",b("React").createElement(b("Link.react"),{href:b("JobConstants").JOBS_POLICY_LINK,target:"_blank"},g._("Facebook's Job Policy")))]),INFO_NOT_POSTED_TO_PROFILE_DISCLAIMER:g._("This info will not be posted to your profile."),COMPLETION_THANKS:function(a){return g._("Thanks, {name}!",[g._param("name",a)])},COMPLETION_CONFIRMATION:function(a){return g._("We sent your application to {employer name} as a message. They will review your application and contact you if there are any next steps.",[g._param("employer name",a)])},APPLY_TO_EMPLOYER:function(a){return g._("Apply to {employer name}",[g._param("employer name",a)])},FILTER_HEADER:g._("Filter Jobs"),JOB_BROWSER_TITLE_CITY_CATEGORY:function(a,b){return g._("{business category} Jobs in {city name}",[g._param("business category",b),g._param("city name",a)])},JOB_BROWSER_TITLE_CITY:function(a){return g._("Local Jobs in {city name}",[g._param("city name",a)])},JOB_BROWSER_TITLE_NEAR_CITY_CATEGORY:function(a,b){return g._("{business category} Jobs near {city name}",[g._param("business category",b),g._param("city name",a)])},JOB_BROWSER_TITLE_NEAR_CITY:function(a){return g._("Local Jobs near {city name}",[g._param("city name",a)])},JOB_BROWSER_TITLE_CATEGORY:function(a){return g._("Nearby {business category} Jobs",[g._param("business category",a)])},JOB_BROWSER_TITLE_NEARBY:g._("Jobs at Nearby Businesses"),JOB_SEARCH_BOOKMARK_TITLE:g._("Jobs"),JOBS_ON_FACEBOOK_TITLE:g._("Jobs on Facebook"),JOBS_TITLE:g._("Jobs"),JOB_SEARCH_INDUSTRY_FILTER_HEADER:g._("INDUSTRY"),JOB_SEARCH_CATEGORY_FILTER_HEADER:g._("CATEGORY"),JOB_SEARCH_JOB_TYPE_FILTER_HEADER:g._("JOB TYPE"),JOB_SEARCH_LOCATION_FILTER_HEADER:g._("LOCATION"),JOB_SEARCH_END_OF_RESULTS:g._("End of Results"),ERROR_COULD_NOT_FIND_ANY_JOBS_NEARBY:g._("There are currently no jobs in your area. Check back later"),ERROR_COULD_NOT_FIND_JOBS:g._("We couldn't find any jobs matching your search criteria"),ERROR_DISCOVER_JOBS_USING_FILTERS:g._("Discover other job openings by using the filters"),APPLY_NOW_LABEL:g._("Apply Now"),OFFSITE_APPLY_LABEL:g._("Apply on Website"),ALREADY_APPLIED:g._("Applied - View Application"),INACTIVE_JOB:g._("Inactive"),BROWSE:g._("Browse"),BROWSE_MORE_JOBS:g._("Browse More Jobs"),FILTER_BUTTON_LABEL:g._("Filter"),UNSAVE_BUTTON_LABEL:g._("Unsave"),SEE_LESS_LABEL:g._("See Less"),COMPOSER_EMPLOYER_POSTED_A_JOB:function(a){return g._("{page name} posted a job.",[g._param("page name",a)])},COMPOSER_USER_PUBLISHED_A_JOB:function(a){return g._("Published by {user name}",[g._param("user name",a)])},JOB_TYPE_AND_WAGE:function(a,b){if(!a&&!b)return null;else if(a&&!b)return a;else if(!a&&b)return b;else return g._("{job type} \u00b7 {wage}",[g._param("job type",a),g._param("wage",b)])},JOB_LOCATION_AND_WAGE:function(a,b){return g._("{wage} \u00b7 {job location}",[g._param("wage",b),g._param("job location",a)])},DESKTOP_NEWS_FEED:g._("Desktop News Feed"),MOBILE_NEWS_FEED:g._("Mobile News Feed"),CHANGE_PHOTO:g._("Change Photo"),UPLOAD_PHOTO:g._("Upload Photo"),OPTIONAL_LABEL:g._("(optional)"),TEXT_CHARACTER_COUNT_LABEL:function(a,b){return g._("{character count} \/ {max count}",[g._param("character count",a),g._param("max count",b)])},JOB_APPLICATIONS_SENT_AS_MESSAGES_TO_EMPLOYER:function(a){return g._("Job applications will be sent to {employer company name} as messages.",[g._param("employer company name",a)])},JOB_APPLICATIONS_SENT_AS_MESSAGES_AND_EMAILS_TO_EMPLOYER:function(a){return g._("Job applications will be sent to {employer company name} as messages and forwarded by email.",[g._param("employer company name",a)])},NEW_LABEL:g._("NEW"),USE_COVER_PHOTO:g._("Use Cover Photo"),SALARY_LABEL:g._("Salary"),SALARY_INPUT_SUBTITLE:g._("Jobs with salary information get more applications."),SALARY_INPUT_MAX_PLACEHOLDER:g._("$ Max"),SALARY_INPUT_MIN_PLACEHOLDER:g._("$ Min"),ERROR_ADD_DETAILS_TO_JOB_POST:g._("Add details to your job post."),ERROR_ADD_HEADLINE_TO_JOB_POST:g._("Add a title to your job post."),ERROR_ADD_LOCATION_TO_JOB_POST:g._("Add a location to your job post."),ERROR_ADD_PHOTO_TO_JOB_POST:g._("Please add a photo."),ERROR_ENTER_VALID_WAGE:g._("Add a salary amount using numbers only."),JOB_TYPE_COMPOSER_LABEL:g._("Job Type"),JOB_TITLE_LABEL:g._("Job Title"),WERE_HIRING_APPLY_NOW:g._("We're hiring! Apply now."),DESCRIBE_JOB_DETAILS:g._("Describe the job tasks and requirements."),CUSTOM_QUESTIONS_LABEL:g._("Additional Questions"),ADD_CUSTOM_QUESTION:g._("Add Additional Question"),HELP_TEXT_FOR_CUSTOM_QUESTIONS:g._("Ask questions you'd like to ask people who apply for this job."),HELP_TEXT_FOR_APPLICATION_NOTIFICATION_EMAILS:g._("Enter an email to receive notifications whenever an application is received."),CUSTOM_QUESTION_FREE_TEXT_PLACEHOLDER:g._("Add a question people can answer in a sentence or 2."),CUSTOM_QUESTION_YES_NO_PLACEHOLDER:g._("Add a question people can answer with Yes or No."),CUSTOM_QUESTION_MULTIPLE_CHOICE_PLACEHOLDER:g._("Add a question people can answer with one option from a list."),CUSTOM_QUESTION_PHOTO_UPLOAD_PLACEHOLDER:g._("Change me to require photos!"),FREE_TEXT_QUESTION_HEADER:g._("Free-Text Question"),YES_NO_QUESTION_HEADER:g._("Yes\/No Question"),MULTIPLE_CHOICE_QUESTION_HEADER:g._("Multiple Choice Question"),MULTIPLE_CHOICE_OPTION_PLACEHOLDER:g._("Add an answer."),ADD_MULTIPLE_CHOICE_OPTION:g._("Add Answer"),MUST_HAVE_TWO_MULTIPLE_CHOICE_OPTIONS:g._("Must have at least two answer options."),PHOTO_UPLOAD_QUESTION_HEADER:g._("Photo Upload Request"),CANNOT_HAVE_DUPLICATE_QUESTIONS:g._("Cannot have duplicate questions."),RECURSIVE_ERROR_LIST:function(a,b){return g._("{previous errors} {following error}",[g._param("previous errors",a),g._param("following error",b)])},SELECT:g._("Select"),HELP_TEXT_FOR_COMPOSER_INTRO_FIELD:g._("This text will appear above the image in your job post, similar to a status update."),INTRODUCTION_LABEL:g._("Introduction"),COMPOSER_LOCATION_PLACEHOLDER:g._("Where will applicants for this job be working?"),APPLICATION_NOTIFICATION_EMAIL_LABEL:g._("Receive applications by email"),COMPOSER_EMAIL_PLACEHOLDER:g._("name\u0040website.com"),DETAILS_LABEL:g._("Details"),HELP_TEXT_FOR_COMPOSER_DETAILS_FIELD:g._("People who click on your job post will see these details."),CREATE_A_JOB:g._("Create a Job"),CREATE_JOB:g._("Create Job"),PLUS_CREATE_JOB:g._("+ Create Job"),POST_JOB:g._("Post Job"),ERROR_DUPLICATE_JOB_POSTING:g._("This job post is identical to the last one you published. Try posting a new job, or delete your previous post."),INTERNSHIP_LABEL:g._("Internship"),VOLUNTEER_LABEL:g._("Volunteer"),FULL_TIME_LABEL:g._("Full-time"),PART_TIME_LABEL:g._("Part-time"),CONTRACT_LABEL:g._("Contract"),FULL_TIME_JOB_LABEL:g._("Full-time Job"),PART_TIME_JOB_LABEL:g._("Part-time Job"),CONTRACT_JOB_LABEL:g._("Contract Job"),PAGE_JOB_OPENING_SOURCE_OPT_IN_PENDING_LABEL:g._("Pending"),PAGE_JOB_OPENING_SOURCE_OPT_OUT_PENDING_LABEL:function(a){return g._("Pending until {provisioning date}",[g._param("provisioning date",a)])},PER_HOUR_LABEL:g._("per hour"),PER_DAY_LABEL:g._("per day"),PER_WEEK_LABEL:g._("per week"),PER_TWO_WEEKS_LABEL:g._("per two weeks"),PER_MONTH_LABEL:g._("per month"),PER_YEAR_LABEL:g._("per year"),PER_HOUR_LABEL_WITH_WAGE:function(a){return g._("{Wage Amount} \/ hour",[g._param("Wage Amount",a)])},PER_DAY_LABEL_WITH_WAGE:function(a){return g._("{Wage Amount} \/ day",[g._param("Wage Amount",a)])},PER_WEEK_LABEL_WITH_WAGE:function(a){return g._("{Wage Amount} \/ week",[g._param("Wage Amount",a)])},PER_TWO_WEEKS_LABEL_WITH_WAGE:function(a){return g._("{Wage Amount} \/ two weeks",[g._param("Wage Amount",a)])},PER_MONTH_LABEL_WITH_WAGE:function(a){return g._("{Wage Amount} \/ month",[g._param("Wage Amount",a)])},PER_YEAR_LABEL_WITH_WAGE:function(a){return g._("{Wage Amount} \/ year",[g._param("Wage Amount",a)])},JOB_TIME_POSTING:function(a){return g._("posted {time_string}",[g._param("time_string",a)])},PHONE_LABEL:g._("Phone"),WAGE_RANGE_INVALID_MESSAGE:g._("The maximum salary must be greater than or equal to the minimum"),INCLUDE_VALID_EMAIL_MESSAGE:g._("Please include a valid email address"),INCLUDE_CITY_MESSAGE:g._("Please include your city"),INCLUDE_NAME_MESSAGE:g._("Please include your name"),INCLUDE_VALID_PHONE_MESSAGE:g._("Please include a valid phone number"),YEAR_DATE_PICKER:function(a){return g._("{year}",[g._param("year",a)])},MONTH_AND_YEAR_DATE_PICKER:function(a,b){return g._("{month} {year}",[g._param("month",a),g._param("year",b)])},MESSENGER_PERMISSION_TEXT:function(a){return g._("{Messenger permission text}",[g._param("Messenger permission text",a)])},PRIVACY_TEXT:function(a){return g._("{privacy text}",[g._param("privacy text",a)])},LEGAL_TEXT:function(a){return g._("{legal text}",[g._param("legal text",a)])},DATA_POLICY_LABEL:function(a){return g._("{Data policy link label}",[g._param("Data policy link label",a)])},TERMS_OF_SERVICE_LINK_LABEL:function(a){return g._("{Terms of service link label}",[g._param("Terms of service link label",a)])},SUBSCRIBE_BUTTON_TOOLTIP:g._("Get notified about new job openings."),SUBSCRIBE_BUTTON_LABEL:g._("Subscribe"),SUBSCRIBED_BUTTON_LABEL:g._("Subscribed"),UPLOAD_RESUME_BUTTON_LABEL:g._("Upload Resume"),UPLOAD_RESUME_BUTTON_DESCRIPTION:g._("Upload your resume to receive jobs matching your background."),EMPLOYER_SELECTOR_DEFAULT_TEXT:g._("Choose a page you manage"),EMPLOYER_SELECTOR_LABEL:g._("Employer Page"),EMPLOYER_SELECTOR_TOOLTIP:g._("Choose the page you want to post the job on."),UNSAVED_JOB:g._("Are you sure you want to leave this page?"),COMPOSER_INTERCEPT_TITLE:g._("Introducing Jobs on Facebook"),COMPOSER_INTERCEPT_BODY:g._("When you create a job using the free Jobs on Facebook feature, your job will be seen by nearby job seekers in the Jobs on Facebook feed."),COMPOSER_INTERCEPT_NOT_NOW:g._("Not Now"),OK:g._("OK"),CANCEL:g._("Cancel"),SUBMIT:g._("Submit"),CLOSE:g._("Close"),JOB_BROWSER_POST_A_JOB_UPSELL:g._("Businesses like yours are finding employees on Facebook. Hear their stories."),DISTANCE_MILES:function(a){return g._({"*":"({number} miles)","_1":"(1 mile)"},[g._plural(a,"number")])},DISTANCE_KM:function(a){return g._({"*":"({number} kms)","_1":"(1 km)"},[g._plural(a,"number")])},JOB_LOCATION_FILTER_SELECT_A_CITY:g._("Select a City"),JOB_LOCATION_FILTER_RADIUS_KM:g._("Radius (in km)"),JOB_LOCATION_FILTER_RADIUS_MILES:g._("Radius (in miles)"),JOB_LOCATION_FILTER_ENTER_RADIUS_KM:function(a,b){return g._("Enter a radius between {min radius}-{max radius} km",[g._param("min radius",a),g._param("max radius",b)])},JOB_LOCATION_FILTER_ENTER_RADIUS_MILES:function(a,b){return g._("Enter a radius between {min radius}-{max radius} miles",[g._param("min radius",a),g._param("max radius",b)])},JOB_LOCATION_FILTER_RADIUS_OUT_OF_RANGE_MILES:function(a,b){return g._("Your radius must be between {min radius}-{max radius} miles",[g._param("min radius",a),g._param("max radius",b)])},JOB_LOCATION_FILTER_RADIUS_OUT_OF_RANGE_KM:function(a,b){return g._("Your radius must be between {min radius}-{max radius} km",[g._param("min radius",a),g._param("max radius",b)])},JOB_LOCATION_FILTER_ENTER_CITY:g._("A city must be selected"),JOB_LOCATION_FILTER_CHANGE_LOCATION:g._("Change"),CITY_AND_STATE:function(a,b){if(!b&&a)return a;else if(!a&&b)return b;else if(a&&b)return g._("{City name}, {State name}",[g._param("City name",a),g._param("State name",b)]);else return""},JOB_POST_LIMIT_EXCEEDED_WARNING:g._("You have exceeded the daily limit of job posts. Please wait until tomorrow before posting more."),ALL_CATEGORIES:g._("All Categories"),ALL_JOB_TYPES:g._("All Job Types"),JOB_KEYWORD_FILTER_PLACEHOLDER:g._("Search jobs"),JOB_BROWSER_CAREERS_UPSELL:g._("Looking for a career at Facebook?"),JOB_BROWSER_VIEW_CAREERS:g._("View Facebook Careers"),NEARBY_CITIES_HEADER:g._("Nearby Cities"),NEARBY_JOBS:g._("Nearby Jobs"),POST_A_JOB_MEGAPHONE_HEADER:g._("Hiring?"),POST_A_JOB_MEGAPHONE_DESCRIPTION:function(a){if(a==null||a==="")return g._("Reach the right applicants by posting your job opening on Facebook. Your post will appear here and on your Page.");else return g._("Post a job for {page name} to reach the right applicants on Facebook.",[g._param("page name",a)])},NOTIFY_ME_LATER_MEGAPHONE_HEADER:g._("Businesses like yours are finding employees on Facebook"),DESCRIPTION:g._("Description"),NOTIFY_ME_LATER_MEGAPHONE_BODY:g._("You can easily create a job from your computer. Let us remind you to post next time you're on your computer."),NOTIFY_ME_LATER_MEGAPHONE_BUTTON:g._("Remind Me Later"),EXPERIENCE_AND_EDUCATION:g._("Experience and Education"),BOOST_POST_TARGETING_TOOLTIP:g._("Facebook can help you reach specific potential applicants by looking at their education, professional experiences and closely related topics. Combine these to expand your job post's reach."),ADD_WORK_EXPERIENCE_AND_EDUCATION:g._("Add work experience and education"),CLOSE_JOB_HIRED_THROUGH_FB:g._("Hired through Facebook"),CLOSE_JOB_HIRED_THROUGH_OTHER:g._("Hired through other"),CLOSE_JOB_NO_LONGER_NEEDED:g._("Job no longer needed"),DID_ADMIN_HIRE_THROUGH_FB:g._("Did you hire someone through Facebook?"),INTRODUCING_JOB_POSTS_NUX_FOR_ADMINS:g._("Introducing Job Posts - create them for free from your Page!"),SEE_ALL:g._("See All"),JOB_ATS_HEADER:function(a){return g._("Application Tracking System for Job Opening: {Job Title},",[g._param("Job Title",a)])},JOB_ATS_LEFT_BLANK:g._("Left Blank"),ATS_NAME_HEADER:g._("Name"),ATS_EMAIL_HEADER:g._("Email"),ATS_CITY_NAME_HEADER:g._("City Name"),ATS_PHONE_NUMBER_HEADER:g._("Phone Number"),ATS_CUSTOM_RESPONSE_HEADER:g._("Custom Response"),ATS_INTRODUCTION_HEADER:g._("Introduction"),ATS_EDUCATION_HEADER:g._("Education"),ATS_WORK_HEADER:g._("Work Experience"),ATS_NOTES_HEADER:g._("Notes"),ATS_ACTIONS_HEADER:g._("Actions"),POSITION_AT_COMPANY:function(a,b){return g._("{Job Position Name} at {Company Name}",[g._param("Job Position Name",a),g._param("Company Name",b)])},AREA_OF_STUDY_AT_SCHOOL:function(a,b){return g._("{Area of study (major or concentration)} at {School Name}",[g._param("Area of study (major or concentration)",a),g._param("School Name",b)])},CUSTOM_QUESTION_LABEL:function(a){return g._("Question: {Custom question label}",[g._param("Custom question label",a)])},CUSTOM_RESPONSE:function(a){return g._("Answer: {Custom response}",[g._param("Custom response",a)])},ATS_MESSAGE_APPLICANT:function(a){return g._("Message {Applicant name}",[g._param("Applicant name",a)])},RESPONSE_HEADER_CAPITALIZED:g._("RESPONSES"),INTRODUCTION_HEADER_CAPITALIZED:g._("INTRODUCTION"),APPLICATION_TO_EMPLOYER_HEADER:function(a,b){if(a&&b)return g._("Application to {Employer name} for the job of {Job title}",[g._param("Employer name",a),g._param("Job title",b)]);else if(a)return g._("Application to {Employer name}",[g._param("Employer name",a)]);else if(b)return g._("Application to {Job position}",[g._param("Job position",b)]);else return g._("Application")},NOTES_PLACEHOLDER:function(a){if(!a)return g._("Notes on applicant");else return g._("Notes on {Applicant name}",[g._param("Applicant name",a)])},SAVE_CHANGES_LABEL:g._("Save Changes"),JOB_TIPS_LABEL:g._("Job Tips"),SEE_ALL_JOB_TIPS_LABEL:g._("See All Job Tips"),EDIT_JOB_POST:g._("Edit Job"),FINISH_JOB_POST:g._("Finish Job Post"),DUPLICATE_JOB_POST:g._("Duplicate Job"),SUBSCRIBE_TO_JOBS_APPLICATION_FORM:g._("Notify me about new job openings"),REQUIRED_LABEL:g._("Required"),THIS_QUESTION_IS_REQUIRED:function(a){return g._("{Employer name} requested a response for this question.",[g._param("Employer name",a)])},MTOUCH_THIS_QUESTION_IS_REQUIRED:function(a,b){return g._("{Employer name} requested a response for \"{question label}\"",[g._param("Employer name",a),g._param("question label",b)])},JOB_APPLICATION:g._("Job Application"),NUM_MORE_EXPERIENCES:function(a){return g._("{Number of experiences} more ...",[g._param("Number of experiences",a)])},VIEW_APPLICATION:g._("View Application"),SAVING_JOB_POST:g._("Saving as Draft"),INTERCEPT_HEADER_TEXT:g._("Hiring? Create a Job Post to Get More Applications"),INTERCEPT_BODY_JOB_POSTED_ON_PAGE:g._("Reach more people looking for jobs"),INTERCEPT_BODY_MANAGE_JOB_POSTS:g._("Manage all your job posts and applications"),INTERCEPT_BODY_CONTACT_APPLICANTS:g._("Connect to applicants and schedule interviews"),JOB_APPLICATION_WORK_EXPERIENCE_MORE_DETAILS_REQUIRED:function(a){return g._("Please add a more detailed summary of your experience with at least {minimum length} characters",[g._param("minimum length",a)])},JOB_APPLICATION_WORK_EXPERIENCE_REQUIRED:g._("The employer requires work experience for this job. Please add at least one work experience to submit the application."),JOB_APPLICATION_EDUCATION_EXPERIENCE_REQUIRED:g._("The employer requires education experience for this job. Please add at least one education experience to submit the application."),DOWNLOAD_RESUME_PDF:g._("Download PDF Resume"),DOWNLOAD_AS_PDF:g._("Download as PDF"),MANAGE_JOBS:g._("Manage Jobs"),SAVE_BUTTON_LABEL:g._("Save"),SHARE:g._("Share"),MORE:g._("More"),REPORT:g._("Report"),REPORT_APPLICANT:g._("Report Applicant"),SHARE_QR_CODE:g._("Share QR Code"),VIEW_APPLICATIONS:g._("View Applications"),NUM_PEOPLE_LIKE_PAGE:function(a){return g._({"*":"{number} people like this","_1":"1 person likes this"},[g._plural(a,"number")])},RENEW_JOB_POST:g._("Renew Job Post"),INACTIVE_MEGAPHONE_BODY:g._("This job post isn't active so people can't see it. If you're still hiring for this position, you can renew it."),INACTIVE_MEGAPHONE_TITLE:g._("Are You Still Hiring?"),EXPIRATION_MEGAPHONE_TITLE:g._("Job Post Will Expire Soon"),CLOSE_JOB_POST:g._("Close Job"),EXPIRATION_MEGAPHONE_SUBTITLE:function(a,b){return g._("Your job post \"{Title of job post}\" expires on {Expiration date}. If you're still hiring for this position, renew your post to keep it active.",[g._param("Title of job post",a),g._param("Expiration date",b)])},PLEASE_ADD_WORK_EXPERIENCE:g._("Please add a work experience to your job application"),REQUEST_ACCESS_DIALOG_HEADER:g._("Request Access to Create Jobs"),SEARCH_BY_PAGE_NAME:g._("Search by Page Name..."),REQUEST_ACCESS_DIALOG_BODY_INTRO:g._("Requesting access to..."),CREATE_AND_MANAGE_POSTS:g._("Create and Manage Job Posts"),VIEW_AND_MANAGE_APPLICATIONS:g._("View and Manage Applications"),ADVERTISE_JOB_POSTS:g._("Advertise Job Posts"),NOTES_TIP:g._("Provide details like your work email or job titles so the admin knows who you are."),NOTES_HEADER:g._("Add a note to your request"),NOTES_OPTIONAL:g._("(Optional)"),REQUEST_SUCCESS_HEADER:g._("Your request was sent."),REQUEST_SUCCESS_BODY:function(a){return!a?g._("Your request will be reviewed by someone who manages this page. If your request is approved, we'll notify you so you can create and manage job posts for this Page."):g._("Your request will be reviewed by someone who manages {page name}. If your request is approved, we'll notify you so you can create and manage job posts for this Page.",[g._param("page name",a)])},SEND_REQUEST:g._("Send Request"),RECRUITERS_AND_HIRING_MANAGERS:g._("Recruiters and Hiring Managers"),REQUEST_ACCESS_JOB_BROWSER_EXPLANATION:g._("You can request access to create job posts for a Page you don't manage."),GET_STARTED:g._("Get Started"),LISTED_BY:g._("Listed By"),APPLICATION_CREATED_DATE:g._("APPLIED ON"),STATUS:g._("STATUS"),POSITION:g._("POSITION"),VIEW_INTERVIEW_DETAILS:g._("View Interview Details"),SCHEDULE_INTERVIEW:g._("Schedule Interview"),CONTACT:g._("Contact"),RATE_APPLICATION:g._("Rate this application"),OK_AGREE_BUTTON_LABEL:g._("Okay, I agree"),APPLICATIONS_NAV_TAB:g._("Applications"),JOB_POSTS_NAV_TAB:g._("Job Posts"),JOB_POST_EXPIRES_IN_X_DAYS:function(a){return g._({"*":"Expires in {number} days","_1":"Expires in 1 day"},[g._plural(a,"number")])},JOB_POST_EXPIRES_WITHIN_ONE_DAY:g._("Expires in less than 1 day"),JOB_POST_EXPIRED_X_DAYS_AGO:function(a){return g._({"*":"Expired {number} days ago","_1":"Expired 1 day ago"},[g._plural(-a,"number")])},PUBLISHED:g._("Published"),JOB_POSTS_EMPTY_TITLE:g._("Hiring?"),JOB_POSTS_EMPTY_DESCRIPTION:function(a){return g._("Post a job for {page name} to reach the right applicants on Facebook.",[g._param("page name",a)])},NEW_JOB_POST:g._("New Job Post"),SUMMARY:g._("Summary"),SET_STATUS:g._("Set Status"),FILTER_BY:g._("Filter By"),JOB_APPLICATIONS:g._("Job Applications"),RANGE_OF_COUNT:function(a,b,c){return g._("{start}-{end} of {count}",[g._param("start",a),g._param("end",b),g._param("count",c)])},PREVIOUS_PAGE:g._("Previous Page"),NEXT_PAGE:g._("Next Page"),SEND_FEEDBACK_BUTTON:g._("Send Feedback"),SEND_FEEDBACK_BODY:g._("Thanks for using Jobs on Facebook. Think we can do something better? We'd love to hear from you."),SEND_FEEDBACK_TITLE:g._("SHARE YOUR FEEDBACK"),ABOUT:function(a){return!a?g._("About"):g._("About {employer name}",[g._param("employer name",a)])},SEND_MESSAGE:g._("Send Message"),VISIT_PAGE:g._("Visit Page"),REPORT_JOB_POST:g._("Report Job Post"),FAVORITED:g._("Favorited"),NEW_FILTER:g._("New"),LOCATION_COLUMN:g._("Location"),SELECT_STATUS:g._("Select Status"),ADD_TO_FAVORITES:g._("Add to Favorites"),ADDED_TO_FAVORITES:g._("Added to Favorites"),SEND_A_MESSAGE:g._("Send a Message"),SEND_AN_EMAIL:g._("Send an Email"),COPY_PHONE_NUMBER:g._("Copy Phone Number"),PHONE_NUMBER_COPIED_TO_CLIPBOARD:function(a){return g._("{phoneNumber} copied to clipboard",[g._param("phoneNumber",a)])},RESET:g._("Reset"),LOADING_APPLICATIONS:g._("Loading Applications"),NO_JOB_APPLICATIONS:g._("You don't have any applications."),NO_JOB_APPLICATIONS_MATCHING_FILTER:g._("No applications match your filters."),NO_JOB_POSTS:g._("Your Page does not have any job posts."),MANAGE_JOBS_SETTINGS:g._("Manage Jobs"),JOBS_SETTINGS_DESCRIPTION:g._("Showing jobs from your connected source"),PAGE_JOB_OPENING_THIRD_PARTY_SOURCE_STATUS_SELECTOR_ACCEPT:g._("Connect"),PAGE_JOB_OPENING_THIRD_PARTY_SOURCE_STATUS_SELECTOR_DECLINE:g._("Disconnect"),PAGE_JOB_OPENING_RECRUITER_SOURCE_STATUS_SELECTOR_ACCEPT:g._("Accept"),PAGE_JOB_OPENING_RECRUITER_SOURCE_STATUS_SELECTOR_DECLINE:g._("Decline"),SUGGESTED_JOBS:g._("Suggested Jobs"),SHARE_TO:g._("Share To More Places"),SHARED_PUBLICLY_TO:g._("SHARED PUBLICLY TO"),YOUR_PROFILE:g._("YOUR PROFILE"),YOUR_GROUPS:g._("YOUR GROUPS"),SHARESHEET_COUNT:function(a,b){return g._("{numerator}\/{denominator}",[g._param("numerator",a),g._param("denominator",b)])},REMOVE_PHOTO:g._("Remove Photo"),COMPOSER_PHOTO_HELP_TEXT:g._("For best results, choose a photo with an aspect ratio of 1.9:1."),BASIC_INFO:g._("Basic Info")}}),null);
__d("JobsFBLogger",["FBLogger"],(function(a,b,c,d,e,f){"use strict";e.exports=b("FBLogger")("job_search")}),null);
__d("XJobApplicationFormAsyncDialogController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/jobsearch/{job_id}/{?waterfall_session_id}/application_form/",{job_id:{type:"FBID",required:!0},source:{type:"Enum",enumType:1},waterfall_session_id:{type:"String"}})}),null);
__d("XJobOpeningDetailViewController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/job_opening/{job_id}/",{job_id:{type:"FBID",required:!0},page_token:{type:"String"},source:{type:"Enum",enumType:1},waterfall_session_id:{type:"String"},referer_mechanism:{type:"Enum",enumType:1}})}),null);
__d("XJobOpeningReportPostController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/job_opening/report_flow/",{story_location:{type:"String",required:!0},job_opening_id:{type:"FBID",required:!0}})}),null);
__d("XPagesManagerManageJobsController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/{page_token}/manage_jobs/",{page_token:{type:"String",required:!0},business_id:{type:"Int"},init_composer:{type:"Bool",defaultValue:!1},init_composer_job_id:{type:"FBID"},init_composer_mode:{type:"Enum",enumType:1},tab:{type:"Enum",enumType:1},job_application_id:{type:"FBID"},referer_mechanism:{type:"Enum",enumType:1},source:{type:"Enum",enumType:1}})}),null);