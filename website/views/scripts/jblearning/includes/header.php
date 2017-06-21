<div id="header">
        <div id="siteSearch"> 
          <script type="text/javascript">
    function doClick(buttonName, e) {
        //the purpose of this function is to allow the enter key to 
        //point to the correct button to click.
        var key;

        if (window.event)
            key = window.event.keyCode;     //IE
        else
            key = e.which;     //firefox

        if (key == 13) {
            //Get the button the user wants to have clicked
            var btn = document.getElementById(buttonName);
            if (btn != null) { //If we find the button click it
                btn.click();
                event.keyCode = 0
            }
        }
    }
</script>
          <style type="text/css">
    .wrapper {
        border: 1px solid #036;
        display: inline-block;
        background-color: white;
    }

    .searchButton {
        background-color:#ffc423 !important;
        cursor: pointer;
        height: 40px !important;
        width:50px !important;
        line-height:2;
        border: 0;
        color:#036 !important;
        /*padding: 9px 5px 5px 5px;*/
    }

    .searchField {
        width:345px;
        font-size:12pt !important;
        padding-left:10px;
        padding-right:10px;
        line-height:2;
        color:#036;
        height:30px;
        border: 0;
    }
</style>
          <link rel="stylesheet" href="/website/static/jblearning/css/font-awesome.min.css" type="text/css">
          <div class="wrapper">
            <input name="ctlSiteSearch$siteSearchText" type="text" id="ctlSiteSearch_siteSearchText" class="searchField" placeholder="Enter Keyword, Title, Author or ISBN">
            <button onclick="if (typeof(Page_ClientValidate) == 'function') Page_ClientValidate('ctlSiteSearch_searchgroup'); __doPostBack('ctlSiteSearch$btnSearch','')" id="ctlSiteSearch_btnSearch" type="submit" class="searchButton" validationgroup="ctlSiteSearch_searchgroup"><i class="fa fa-search fa-2x"></i></button>
          </div>
          <br>
          <script type="text/javascript">
    $('#ctlSiteSearch_btnSearch').on("click", function () {
        if (Page_ClientValidate('ctlSiteSearch_searchgroup') == true)
            __doPostBack('ctlSiteSearch$btnSearch', '');
        else
            return false;
    });
    
    $('#ctlSiteSearch_btnSearch').on("keypress", (function (e) {
      if (e.which == 13) {
        $('form').submit();
        return false;    //<---- Add this line
      }
    }));
</script> 
        </div>
        <!-- #siteSearch -->
        <div id="siteNav">
          <dl>
            <dt><a title="Jones &amp; Bartlett Learning" href="index.html"><img class="homeNavSpacer" src="/website/static/jblearning/images/spacer.gif" alt="Jones &amp; Bartlett Learning"></a></dt>
            <dd>
              <ul>
                <li id="navBrowseSubjects" class="on">
                  <dl>
                    <dt><a href="#" onclick="return false;" style="background-position: 0px 0px">Browse Subjects</a></dt>
                    <dd>
                      <ul>
                        <li class="first">
                          <dl>
                            <dt><a href="#" onclick="return false;">Biological, Physical, &amp; Social Sciences</a></dt>
                            <dd><span class="top"></span>
                              <div class="navwrap"><ul>
                                <li>
                                  <dl>
                                    <dt><a class="" href="cjandsociology/index.html">Criminal Justice and Sociology</a></dt>
                                    <dd>
                                      <ul>
                                        <li><a href="criminalJustice/corrections/index.html">Corrections</a></li>
                                        <li><a href="criminalJustice/law/index.html">Courts &amp; Law</a></li>
                                        <li><a href="criminalJustice/forensics/index.html">Criminal Investigations &amp; Forensic Science</a></li>
                                        <li><a href="criminalJustice/criminology/index.html">Criminology &amp; Victimology</a></li>
                                        <li><a href="criminalJustice/intro/index.html">Introduction to Criminal Justice</a></li>
                                        <li><a href="criminalJustice/delinquency/index.html">Juvenile Delinquency</a></li>
                                        <li><a href="criminalJustice/enforcement/index.html">Law Enforcement, Policing, &amp; Security</a></li>
                                        <li><a href="criminalJustice/sociology/index.html">Sociology</a></li>
                                      </ul>
                                    </dd>
                                  </dl>
                                </li>
                                <li>
                                  <dl>
                                    <dt><a class="" href="psychology/index.html">Psychology</a></dt>
                                    <dd>
                                      <ul>
                                        <li><a href="psychology/introduction/index.html">Introduction To Psychology</a></li>
                                      </ul>
                                    </dd>
                                  </dl>
                                </li>
                                <li>
                                  <dl>
                                    <dt><a class="" href="publicadmin/index.html">Public Administration</a></dt>
                                    <dd>
                                      <ul>
                                        <li><a href="publicAdministration/budgeting/index.html">Budgeting &amp; Finance</a></li>
                                        <li><a href="publicAdministration/fundraising/index.html">Fundraising</a></li>
                                        <li><a href="publicAdministration/grants/index.html">Grants</a></li>
                                        <li><a href="publicAdministration/technology/index.html">Information Technology</a></li>
                                        <li><a href="publicAdministration/law/index.html">Law &amp; Ethics</a></li>
                                        <li><a href="publicAdministration/management/index.html">Management &amp; Leadership</a></li>
                                      </ul>
                                    </dd>
                                  </dl>
                                </li>
                                <li>
                                  <dl>
                                    <dt><a class="" href="science/index.html">Science</a></dt>
                                    <dd style="width: 410px;">
                                      <div id="li_container1" class="li_container"><ul class="li_cont1" style="float: left; width: 205px;">
                                        <li class="li_col1"><a href="science/astronomy/index.html">Astronomy</a></li>
                                        <li class="li_col1"><a href="science/bioinformatics/index.html">Bioinformatics</a></li>
                                        <li class="li_col1"><a href="science/chemistry/index.html">Chemistry</a></li>
                                        <li class="li_col1"><a href="science/environmental/index.html">Environmental Science/ Ecology</a></li>
                                        <li class="li_col1"><a href="science/genetics/index.html">Genetics and Evolution</a></li>
                                        <li class="li_col1"><a href="science/geosciences/index.html">Geosciences</a></li>
                                        <li class="li_col1"><a href="science/biology/index.html">Introductory &amp; Human Biology</a></li>
                                        
                                        
                                        
                                        
                                        
                                        
                                      </ul><ul class="li_cont2 undefined" style="float:left; width: 205px;"><li class="li_col2"><a href="science/marine/index.html">Marine Biology</a></li><li class="li_col2"><a href="science/microbiology/index.html">Microbiology</a></li><li class="li_col2"><a href="science/molecular/index.html">Molecular &amp; Cell Biology</a></li><li class="li_col2"><a href="science/pathology/index.html">Molecular Medicine/ Pathology</a></li><li class="li_col2"><a href="science/physics/index.html">Physics</a></li><li class="li_col2"><a href="science/botany/index.html">Plant and Animal Science</a></li></ul><div style="clear:both; overflow:hidden; height:0px;"></div></div>
                                    </dd>
                                  </dl>
                                </li>
                              </ul></div>
                            <span class="bottom"></span></dd>
                          </dl>
                        </li>
                        <li class="">
                          <dl>
                            <dt><a href="#" onclick="return false;">Computing, Math, &amp; Engineering</a></dt>
                            <dd><span class="top"></span>
                              <div class="navwrap"><ul>
                                <li>
                                  <dl>
                                    <dt><a class="" href="computing/index.html" style="border-color: rgb(70, 111, 129);">Computing</a></dt>
                                    <dd style="width: 410px;">
                                      <div id="li_container2" class="li_container"><ul class="li_cont1" style="float: left; width: 205px;">
                                        <li class="li_col1"><a href="computing/ai/index.html">Artificial Intelligence</a></li>
                                        <li class="li_col1"><a href="computing/bioinformatics/index.html">Bioinformatics</a></li>
                                        <li class="li_col1"><a href="computing/architecture/index.html">Computer Architecture/ Software Engineering</a></li>
                                        <li class="li_col1"><a href="computing/ethics/index.html">Computer Ethics</a></li>
                                        <li class="li_col1"><a href="computing/graphics/index.html">Computer Graphics &amp; Graphics Applications</a></li>
                                        <li class="li_col1"><a href="computing/datastructures/index.html">Data Structures &amp; Theory of Computation</a></li>
                                        
                                        
                                        
                                        
                                        
                                        
                                      </ul><ul class="li_cont2 undefined" style="float:left; width: 205px;"><li class="li_col2"><a href="computing/databases/index.html">Enterprise Computing/ Databases</a></li><li class="li_col2"><a href="computing/game/index.html">Game Design/ Development</a></li><li class="li_col2"><a href="computing/intro/index.html">Intro Computer Science (CS0)</a></li><li class="li_col2"><a href="computing/security/index.html">Networking &amp; Security</a></li><li class="li_col2"><a href="computing/languages/index.html">Programming/ Languages</a></li><li class="li_col2"><a href="computing/web/index.html">Web Development</a></li></ul><div style="clear:both; overflow:hidden; height:0px;"></div></div>
                                    </dd>
                                  </dl>
                                </li>
                                <li class="">
                                  <dl>
                                    <dt><a class="" href="engineering/index.html">Engineering</a></dt>
                                    <dd>
                                      <ul>
                                        <li class=""><a href="engineering/cad/index.html">CAD/ Modeling</a></li>
                                        <li class=""><a href="engineering/chemical/index.html">Chemical Engineering</a></li>
                                        <li><a href="engineering/electrical/index.html">Electrical Engineering/ ECE</a></li>
                                        <li><a href="engineering/science/index.html">Engineering Science &amp; Technology</a></li>
                                        <li><a href="engineering/mechanical/index.html">Mechanical Engineering</a></li>
                                      </ul>
                                    </dd>
                                  </dl>
                                </li>
                                <li>
                                  <dl>
                                    <dt><a class="" href="math/index.html">Mathematics</a></dt>
                                    <dd>
                                      <ul>
                                        <li><a href="mathematics/advanced/index.html">Advanced Mathematics</a></li>
                                        <li><a href="mathematics/calculus/index.html">Calculus</a></li>
                                        <li><a href="mathematics/discrete/index.html">Discrete Mathematics</a></li>
                                        <li><a href="mathematics/engineering/index.html">Engineering Mathematics</a></li>
                                        <li><a href="mathematics/geometry/index.html">Geometry</a></li>
                                        <li><a href="mathematics/algebra/index.html">Linear Algebra</a></li>
                                        <li><a href="mathematics/cs/index.html">Mathematics for Computer Scientists</a></li>
                                        <li><a href="mathematics/precalculus/index.html">Precalculus </a></li>
                                      </ul>
                                    </dd>
                                  </dl>
                                </li>
                              </ul></div>
                            <span class="bottom"></span></dd>
                          </dl>
                        </li>
                        <li class="">
                          <dl>
                            <dt><a href="#" onclick="return false;">EMS, Fire, &amp; Emergency Care and Safety Institute</a></dt>
                            <dd>
                              <ul>
                                <li>
                                  <dl>
                                    <dt><a class="no-arrow" href="https://www.psglearning.com/ems/">Emergency Care and Safety Institute</a></dt>
                                  </dl>
                                </li>
                                <li>
                                  <dl>
                                    <dt><a class="no-arrow" href="https://www.psglearning.com/ems/">EMS</a></dt>
                                  </dl>
                                </li>
                                <li>
                                  <dl>
                                    <dt><a class="no-arrow" href="https://www.psglearning.com/fire/">Fire</a></dt>
                                  </dl>
                                </li>
                                <li>
                                  <dl>
                                    <dt><a class="no-arrow" href="https://www.psglearning.com/ems/">Informed</a></dt>
                                  </dl>
                                </li>
                              </ul>
                            </dd>
                          </dl>
                        </li>
                        <li class="">
                          <dl>
                            <dt><a href="#" onclick="return false;">Health Sciences &amp; Professions</a></dt>
                            <dd><span class="top"></span>
                              <div class="navwrap"><ul>
                                <li class="">
                                  <dl>
                                    <dt><a class="" href="publichealth/index.html" style="border-color: rgb(70, 111, 129);">Community &amp; Public Health</a></dt>
                                    <dd style="width: 410px;">
                                      <div id="li_container3" class="li_container"><ul class="li_cont1" style="float: left; width: 205px;">
                                        <li class="li_col1"><a href="health/biostatistics/index.html">Biostatistics</a></li>
                                        <li class="li_col1"><a href="health/culture/index.html">Culture &amp; Diversity</a></li>
                                        <li class="li_col1"><a href="health/disaster/index.html">Disaster Preparedness</a></li>
                                        <li class="li_col1"><a href="health/environmental/index.html">Environmental Health</a></li>
                                        <li class="li_col1"><a href="health/epidemiology/index.html">Epidemiology</a></li>
                                        <li class="li_col1"><a href="health/eph/index.html">Essential Public Health Series</a></li>
                                        <li class="li_col1"><a href="health/global/index.html">Global Health</a></li>
                                        <li class="li_col1"><a href="health/behavior/index.html">Health Behavior</a></li>
                                        <li class="li_col1"><a href="health/education/index.html">Health Education &amp; Promotion</a></li>
                                        
                                        
                                        
                                        
                                        
                                        
                                        
                                        
                                      </ul><ul class="li_cont2 undefined" style="float:left; width: 205px;"><li class="li_col2"><a href="health/navigation/index.html">Health Navigation Series</a></li><li class="li_col2"><a href="health/policy/index.html">Health Policy, Law, &amp; Economics</a></li><li class="li_col2"><a href="health/introductorypublichealth/index.html">Introductory Public Health</a></li><li class="li_col2"><a href="health/leadership/index.html">Leadership Management</a></li><li class="li_col2"><a href="health/marketing/index.html">Marketing &amp; Communication</a></li><li class="li_col2"><a href="health/maternal/index.html">Maternal &amp; Child Health</a></li><li class="li_col2"><a href="health/research/index.html">Research Methods</a></li><li class="li_col2"><a href="health/advancedepidemiology/index.html">Specialized Epidemiology</a></li></ul><div style="clear:both; overflow:hidden; height:0px;"></div></div>
                                    </dd>
                                  </dl>
                                </li>
                                <li class="">
                                  <dl>
                                    <dt><a class="" href="healthadmin/index.html">Health Care Administration</a></dt>
                                    <dd style="width: 410px;">
                                      <div id="li_container4" class="li_container"><ul class="li_cont1" style="float: left; width: 205px;">
                                        <li class="li_col1"><a href="healthcare/career/index.html">Career Development</a></li>
                                        <li class="li_col1"><a href="healthcare/finance/index.html">Finance/ Accounting/ Economics</a></li>
                                        <li class="li_col1"><a href="healthcare/delivery/index.html">Health Systems &amp; Delivery</a></li>
                                        <li class="li_col1"><a href="healthcare/humanresources/index.html">Human Resources</a></li>
                                        <li class="li_col1"><a href="healthcare/informatics/index.html">Information Management/ Informatics</a></li>
                                        <li class="li_col1"><a href="healthcare/law/index.html">Law/ Ethics</a></li>
                                        <li class="li_col1"><a href="healthcare/leadership/index.html">Leadership/ Management/ Administration</a></li>
                                        <li class="li_col1"><a href="healthcare/longtermcare/index.html">Long-Term Care</a></li>
                                        
                                        
                                        
                                        
                                        
                                        
                                        
                                        
                                      </ul><ul class="li_cont2 undefined" style="float:left; width: 205px;"><li class="li_col2"><a href="healthcare/managedcare/index.html">Health Insurance &amp; Managed Care</a></li><li class="li_col2"><a href="healthcare/marketing/index.html">Marketing/ Strategic Planning</a></li><li class="li_col2"><a href="healthcare/theory/index.html">Organizational Behavior/ Theory</a></li><li class="li_col2"><a href="healthcare/patientsafety/index.html">Patient Safety/ Risk Management</a></li><li class="li_col2"><a href="healthcare/practice/index.html">Practice Management</a></li><li class="li_col2"><a href="healthcare/quality/index.html">Quality Improvement</a></li><li class="li_col2"><a href="healthcare/statistics/index.html">Statistics/ Quantitative Methods</a></li><li class="li_col2"><a href="healthcare/videosimulations/index.html">Video Simulations</a></li></ul><div style="clear:both; overflow:hidden; height:0px;"></div></div>
                                    </dd>
                                  </dl>
                                </li>
                                <li>
                                  <dl>
                                    <dt><a class="" href="healthprofessions/index.html">Health Professions</a></dt>
                                    <dd style="width: 410px;">
                                      <div id="li_container5" class="li_container"><ul class="li_cont1" style="float: left; width: 205px;">
                                        <li class="li_col1"><a href="healthprofessions/athletic/index.html">Athletic Training</a></li>
                                        <li class="li_col1"><a href="healthprofessions/chiropractic/index.html">Chiropractic</a></li>
                                        <li class="li_col1"><a href="healthprofessions/communication/index.html">Communication/ Patient Education</a></li>
                                        <li class="li_col1"><a href="healthprofessions/examprep/index.html">Exam Prep</a></li>
                                        <li class="li_col1"><a href="healthprofessions/intro/index.html">General Health Professions</a></li>
                                        <li class="li_col1"><a href="healthprofessions/reference/index.html">Medical Terminology/ Health Reference</a></li>
                                        <li class="li_col1"><a href="healthprofessions/occupational/index.html">Occupational Therapy</a></li>
                                        <li class="li_col1"><a href="healthprofessions/pharmacypractice/index.html">Pharmacy Practice</a></li>
                                        
                                        
                                        
                                        
                                        
                                        
                                        
                                        
                                      </ul><ul class="li_cont2 undefined" style="float:left; width: 205px;"><li class="li_col2"><a href="healthprofessions/pharmacytechnician/index.html">Pharmacy Technician</a></li><li class="li_col2"><a href="healthprofessions/physicaltherapist/index.html">Physical Therapist Assistant</a></li><li class="li_col2"><a href="healthprofessions/physicaltherapy/index.html">Physical Therapy</a></li><li class="li_col2"><a href="healthprofessions/physicianassistant/index.html">Physician Assistant</a></li><li class="li_col2"><a href="healthprofessions/polysomnography/index.html">Polysomnography</a></li><li class="li_col2"><a href="healthprofessions/radiologic/index.html">Radiologic Sciences</a></li><li class="li_col2"><a href="healthprofessions/respiratory/index.html">Respiratory Care</a></li><li class="li_col2"><a href="healthprofessions/speech/index.html">Speech/ Language/ Hearing</a></li></ul><div style="clear:both; overflow:hidden; height:0px;"></div></div>
                                    </dd>
                                  </dl>
                                </li>
                                <li>
                                  <dl>
                                    <dt><a class="" href="healthfitnesssport/index.html">Health, Fitness, &amp; Sport</a></dt>
                                    <dd style="width: 410px;">
                                      <div id="li_container6" class="li_container"><ul class="li_cont1" style="float: left; width: 205px;">
                                        <li class="li_col1"><a href="health/coaching/index.html">Coaching/ Athletic Training</a></li>
                                        <li class="li_col1"><a href="health/drugs/index.html">Drugs &amp; Addictions Counseling</a></li>
                                        <li class="li_col1"><a href="health/exercisescience/index.html">Exercise Science</a></li>
                                        <li class="li_col1"><a href="health/fitness/index.html">Fitness</a></li>
                                        <li class="li_col1"><a href="health/wellness/index.html">Health &amp; Wellness</a></li>
                                        <li class="li_col1"><a href="health/disease/index.html">Human Disease</a></li>
                                        <li class="li_col1"><a href="health/sexuality/index.html">Human Sexuality</a></li>
                                        
                                        
                                        
                                        
                                        
                                        
                                      </ul><ul class="li_cont2 undefined" style="float:left; width: 205px;"><li class="li_col2"><a href="health/physicaleducation/index.html">Physical Education</a></li><li class="li_col2"><a href="health/recreation/index.html">Recreation &amp; Leisure</a></li><li class="li_col2"><a href="health/school/index.html">School Health Education</a></li><li class="li_col2"><a href="health/sport/index.html">Sport Management</a></li><li class="li_col2"><a href="health/stress/index.html">Stress Management</a></li><li class="li_col2"><a href="health/womens/index.html">Women's Health</a></li></ul><div style="clear:both; overflow:hidden; height:0px;"></div></div>
                                    </dd>
                                  </dl>
                                </li>
                                <li>
                                  <dl>
                                    <dt><a class="" href="nutrition/index.html">Nutrition</a></dt>
                                    <dd>
                                      <ul>
                                        <li><a href="health/clinicalnutrition/index.html">Clinical Nutrition</a></li>
                                        <li><a href="health/communitynutrition/index.html">Community Nutrition</a></li>
                                        <li><a href="health/counseling/index.html">Counseling &amp; Education</a></li>
                                        <li><a href="health/dietetics/index.html">Dietetics Practice</a></li>
                                        <li><a href="health/introductorynutrition/index.html">Introductory Nutrition</a></li>
                                        <li><a href="health/lifestages/index.html">Nutrition in Life Stages</a></li>
                                        <li><a href="health/sportnutrition/index.html">Sport Nutrition</a></li>
                                      </ul>
                                    </dd>
                                  </dl>
                                </li>
                                <li>
                                  <dl>
                                    <dt><a class="" href="healthseries/index.html">Series</a></dt>
                                    <dd>
                                      <ul>
                                        <li><a href="health/essentialpublichealth/index.html">Essential Public Health</a></li>
                                      </ul>
                                    </dd>
                                  </dl>
                                </li>
                              </ul></div>
                            <span class="bottom"></span></dd>
                          </dl>
                        </li>
                        <li class="">
                          <dl>
                            <dt><a href="#" onclick="return false;">Nursing, Medicine, &amp; Pharma</a></dt>
                            <dd><span class="top"></span>
                              <div class="navwrap"><ul>
                                <li>
                                  <dl>
                                    <dt><a class="" href="medicine/index.html">Medicine</a></dt>
                                    <dd style="width: 410px;">
                                      <div id="li_container7" class="li_container"><ul class="li_cont1" style="float: left; width: 205px;">
                                        <li class="li_col1"><a href="medicine/cardiology/index.html">Cardiology</a></li>
                                        <li class="li_col1"><a href="medicine/reference/index.html">Clinical Reference Cards</a></li>
                                        <li class="li_col1"><a href="medicine/dermatology/index.html">Dermatology</a></li>
                                        <li class="li_col1"><a href="medicine/emergency/index.html">Emergency Medicine</a></li>
                                        <li class="li_col1"><a href="medicine/endocrinology/index.html">Endocrinology (Diabetes)</a></li>
                                        <li class="li_col1"><a href="medicine/gastroenterology/index.html">Gastroenterology</a></li>
                                        <li class="li_col1"><a href="medicine/infectious/index.html">Infectious Disease</a></li>
                                        <li class="li_col1"><a href="medicine/neurology/index.html">Neurology</a></li>
                                        <li class="li_col1"><a href="medicine/obstetrics/index.html">Obstetrics &amp; Gynecology</a></li>
                                        <li class="li_col1"><a href="medicine/oncology/index.html">Oncology</a></li>
                                        <li class="li_col1"><a href="medicine/ophthalmology/index.html">Ophthalmology</a></li>
                                        
                                        
                                        
                                        
                                        
                                        
                                        
                                        
                                        
                                        
                                      </ul><ul class="li_cont2 undefined" style="float:left; width: 205px;"><li class="li_col2"><a href="medicine/orthopedics/index.html">Orthopedics</a></li><li class="li_col2"><a href="medicine/patienteducation/index.html">Patient Education &amp; Self Help</a></li><li class="li_col2"><a href="medicine/online/index.html">PDA &amp; Online Products</a></li><li class="li_col2"><a href="medicine/pediatrics/index.html">Pediatrics</a></li><li class="li_col2"><a href="medicine/primary/index.html">Primary Care</a></li><li class="li_col2"><a href="medicine/professional/index.html">Professional Resources</a></li><li class="li_col2"><a href="medicine/psychiatry/index.html">Psychiatry &amp; Mental Health </a></li><li class="li_col2"><a href="medicine/pulmonology/index.html">Pulmonology</a></li><li class="li_col2"><a href="medicine/review/index.html">Review Guides</a></li><li class="li_col2"><a href="medicine/urology/index.html">Urology</a></li></ul><div style="clear:both; overflow:hidden; height:0px;"></div></div>
                                    </dd>
                                  </dl>
                                </li>
                                <li>
                                  <dl>
                                    <dt><a class="" href="nursing/index.html">Nursing</a></dt>
                                    <dd style="width: 410px;">
                                      <div id="li_container8" class="li_container"><ul class="li_cont1" style="float: left; width: 205px;">
                                        <li class="li_col1"><a href="nursing/advancepractice/index.html">Advanced Practice</a></li>
                                        <li class="li_col1"><a href="nursing/career/index.html">Career &amp; Professional Development</a></li>
                                        <li class="li_col1"><a href="nursing/communication/index.html">Communication/ Patient Education</a></li>
                                        <li class="li_col1"><a href="nursing/community/index.html">Community/ Public Health/ Health Policy</a></li>
                                        <li class="li_col1"><a href="nursing/emergency/index.html">Critical Care/ Emergency/ Surgery</a></li>
                                        <li class="li_col1"><a href="nursing/reference/index.html">Drug Reference/ Pharmacology</a></li>
                                        <li class="li_col1"><a href="nursing/gerontology/index.html">Gerontology</a></li>
                                        <li class="li_col1"><a href="nursing/holistic/index.html">Holistic Nursing &amp; Spirituality</a></li>
                                        <li class="li_col1"><a href="nursing/home/index.html">Home &amp; Community Care</a></li>
                                        <li class="li_col1"><a href="nursing/lactation/index.html">Lactation &amp; Breastfeeding</a></li>
                                        <li class="li_col1"><a href="nursing/leadership/index.html">Leadership/ Management/ Finance</a></li>
                                        
                                        
                                        
                                        
                                        
                                        
                                        
                                        
                                        
                                        
                                      </ul><ul class="li_cont2 undefined" style="float:left; width: 205px;"><li class="li_col2"><a href="nursing/legal/index.html">Legal/ Ethics</a></li><li class="li_col2"><a href="nursing/technology/index.html">Math &amp; Technology</a></li><li class="li_col2"><a href="nursing/womenshealth/index.html">Midwifery &amp; Women's Health</a></li><li class="li_col2"><a href="nursing/education/index.html">Nursing Education</a></li><li class="li_col2"><a href="nursing/oncology/index.html">Oncology</a></li><li class="li_col2"><a href="nursing/pediatrics/index.html">Pediatrics</a></li><li class="li_col2"><a href="nursing/pharmacology/index.html">Pharmacology</a></li><li class="li_col2"><a href="nursing/psychology/index.html">Psychology &amp; Mental Health</a></li><li class="li_col2"><a href="nursing/research/index.html">Research/ Theory</a></li><li class="li_col2"><a href="nursing/review/index.html">Review Guides/ Certification Prep/ Pocket Guides</a></li></ul><div style="clear:both; overflow:hidden; height:0px;"></div></div>
                                    </dd>
                                  </dl>
                                </li>
                                <li>
                                  <dl>
                                    <dt><a class="" href="nursingmedicinepharmaseries/index.html">Series</a></dt>
                                    <dd>
                                      <ul>
                                        <li><a href="series/100QA/index.html">100 Q&amp;A</a></li>
                                        <li><a href="series/dxrx/index.html">Dx/ Rx</a></li>
                                        <li><a href="series/essentials/index.html">Essentials</a></li>
                                        <li><a href="series/johnshopkins/index.html">Johns Hopkins Patients Guides</a></li>
                                        <li><a href="series/littleblack/index.html">Little Black Books</a></li>
                                      </ul>
                                    </dd>
                                  </dl>
                                </li>
                                <li>
                                  <dl>
                                    <dt><a class="" href="tarasconpublishing/index.html">Tarascon</a></dt>
                                    <dd>
                                      <ul>
                                        <li><a href="tarascon/mobileweb/index.html">Mobile/ Web Products</a></li>
                                        <li><a href="tarascon/pharmacopoeia/index.html">Pharmacopoeia</a></li>
                                        <li><a href="tarascon/pocketbooks/index.html">Pocketbooks</a></li>
                                        <li><a href="tarascon/referencecards/index.html">Reference Cards</a></li>
                                      </ul>
                                    </dd>
                                  </dl>
                                </li>
                              </ul></div>
                            <span class="bottom"></span></dd>
                          </dl>
                        </li>
                        <li class="">
                          <dl>
                            <dt><a href="#" onclick="return false;">Vocational &amp; Trade</a></dt>
                            <dd><span class="top"></span>
                              <div class="navwrap"><ul>
                                <li>
                                  <dl>
                                    <dt><a class="" href="cdxautomotive/index.html">CDX Automotive</a></dt>
                                    <dd>
                                      <ul>
                                        <li><a href="cdx/automotive/index.html">Automotive Training</a></li>
                                        <li><a href="cdx/vehicletraining/index.html">Medium/ Heavy Vehicle Training</a></li>
                                      </ul>
                                    </dd>
                                  </dl>
                                </li>
                                <li>
                                  <dl>
                                    <dt><a class="" href="electrical/index.html">Electrical</a></dt>
                                    <dd>
                                      <ul>
                                        <li><a href="electrical/alternative/index.html">Alternative &amp; Renewable Energy</a></li>
                                        <li><a href="electrical/management/index.html">Business Management</a></li>
                                        <li><a href="electrical/inspection/index.html">Electrical Inspection</a></li>
                                        <li><a href="electrical/safety/index.html">Electrical Safety</a></li>
                                        <li><a href="electrical/journeyman/index.html">Journeyman Exam Preparation</a></li>
                                        <li><a href="electrical/master/index.html">Master Electrician Exam Preparation</a></li>
                                        <li><a href="electrical/nec/index.html">National Electrical Code®</a></li>
                                        <li><a href="electrical/uglys/index.html">Ugly's Reference Series</a></li>
                                        <li><a href="electrical/wiring/index.html">Wiring</a></li>
                                      </ul>
                                    </dd>
                                  </dl>
                                </li>
                              </ul></div>
                            <span class="bottom"></span></dd>
                          </dl>
                        </li>
                      </ul>
                    </dd>
                  </dl>
                </li>
                <li><a href="elearning/index.html">eLearning</a></li>
                <li><a href="custom/overview/index.html">Custom Solutions</a></li>
                <li><a href="brandspartners/brands/index.html">Brand &amp; Partners</a></li>
                <li><a href="about/overview/index.html">About Us</a></li>
                <li><a href="booksellers/wholesaler/index.html">Booksellers</a></li>
              </ul>
            </dd>
          </dl>
          <style type="text/css">
    /*.no-arrow{background: url('/img/sitenav-arrow2.gif') no-repeat 0 0px;}*/
    .no-arrow {background: url('') 138px -129px no-repeat !important;}
</style>
        </div>
        <!-- #siteNav -->
        <div id="shopTools" class="mininav">
          <dl>
            <dt>Shopping Tools</dt>
            <dd>
              <ul>
                <li><a href="techsupport/index.html">Technical Support</a></li>
                <li><a href="about/contact/index.html">Contact Us</a></li>
                <li><a href="myaccount/index.html">My Account</a></li>
                <li><a href="http://www2.jblearning.com/my-account/terms-and-conditions">Redeem Code</a></li>
                <li class="cart last"><a href="cart/indexf483.html?ref=jblearning" id="ctlShopTools_hfCartLink">Shopping Cart</a></li>
              </ul>
            </dd>
          </dl>
        </div>
        <!-- #supernav --> 
      </div>