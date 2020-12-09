const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
var multipart = require('connect-multiparty');

const AddProductCategory = require("./api/routes/AddProductCategory");
const AddDosageForm = require("./api/routes/AddDosageForm");
const AddPackagingSize = require("./api/routes/AddPackagingSize");
const AddPackagingType = require("./api/routes/AddPackagingType");
const UpdateProductCategory = require("./api/routes/UpdateProductCategory");
const UpdateDosageForm = require("./api/routes/UpdateDosageForm");
const UpdatePackagingSize = require("./api/routes/UpdatePackagingSize");
const UpdatePackagingType = require("./api/routes/UpdatePackagingType");
const UsernameAuth = require("./api/routes/UsernameAuth");
const AddStaff = require("./api/routes/AddStaff");
const UpdateStaff = require("./api/routes/UpdateStaff");
const GetStaff = require("./api/routes/GetStaff");
const GetCountry = require("./api/routes/GetCountry");
const GetState = require("./api/routes/GetState");
const GetCity = require("./api/routes/GetCity");
const GetProductCategory = require("./api/routes/GetProductCategory");
const GetDosageForm = require("./api/routes/GetDosageForm");
const GetPackagingSize = require("./api/routes/GetPackagingSize");
const GetPackagingType = require("./api/routes/GetPackagingType");
const UpdatePasswordDetails = require("./api/routes/UpdatePasswordDetails");
const DeleteProductCategory = require("./api/routes/DeleteProductCategory");
const DeleteDosageForm = require("./api/routes/DeleteDosageForm");
const DeletePackagingSize = require("./api/routes/DeletePackagingSize");
const DeletePackagingType = require("./api/routes/DeletePackagingType");
const AddFaq = require("./api/routes/AddFaq");
const GetFaq = require("./api/routes/GetFaq");
const DeleteFaq = require("./api/routes/DeleteFaq");
const UpdateFaq = require("./api/routes/UpdateFaq");
const AddPharmaCompany = require("./api/routes/AddPharmaCompany");
const GetBrand = require("./api/routes/GetBrand");
const AddBrand = require("./api/routes/AddBrand");
const UpdateBrand = require("./api/routes/UpdateBrand");
const GetPharmaCompany = require("./api/routes/GetPharmaCompany");
const UpdatePharmaCompany = require("./api/routes/UpdatePharmaCompany");
const AddLoginSession = require("./api/routes/AddLoginSession");
const AddLoginDetails = require("./api/routes/AddLoginDetails");
const AddDoctorQualification = require("./api/routes/AddDoctorQualification");
const AddNutritionist = require("./api/routes/AddNutritionist");
const AddNutritionistQualification = require("./api/routes/AddNutritionistQualification")
const AddYogaTrainer = require("./api/routes/AddYogaTrainer");
const AddYogaTrainerQualification = require("./api/routes/AddYogaTrainerQualification");
const AddHealthCareCenter = require("./api/routes/AddHealthCareCenter");
const AddDiagnosticCenter = require("./api/routes/AddDiagnosticCenter");
const AddDoctor = require("./api/routes/AddDoctor");
const GetDoctor = require("./api/routes/GetDoctor");
const GetNutritionist = require("./api/routes/GetNutritionist");
const GetYogaTrainer = require("./api/routes/GetYogaTrainer");
const GetHealthCenter = require("./api/routes/GetHealthCenter");
const GetDiagnosticCenter = require("./api/routes/GetDiagnosticCenter");
const GetDoctorQualification = require("./api/routes/GetDoctorQualification");
const UpdateDoctor = require("./api/routes/UpdateDoctor");
const GetNutritionistQualification = require("./api/routes/GetNutritionistQualification");
const UpdateNutritionist = require("./api/routes/UpdateNutritionist");
const GetYogaQualification = require("./api/routes/GetYogaQualification");
const UpdateYogaTrainer = require("./api/routes/UpdateYogaTrainer");
const UpdateHealthCenter = require("./api/routes/UpdateHealthCenter");
const UpdateDiagnosticCenter = require("./api/routes/UpdateDiagnosticCenter");
const GetDiagnosticCenterBranch = require("./api/routes/GetDiagnosticCenterBranch");
const AddDiagnosticCenterBranch = require("./api/routes/AddDiagnosticCenterBranch");
const UpdateDiagnosticCenterBranch = require("./api/routes/UpdateDiagnosticCenterBranch");
const GetBlogCategory = require("./api/routes/GetBlogCategory");
const GetBlogSubCategory = require("./api/routes/GetBlogSubCategory");
const AddBlog = require("./api/routes/AddBlog");
const GetBlog = require("./api/routes/GetBlog");
const UpdateBlog = require("./api/routes/UpdateBlog");
const DeleteBlog = require("./api/routes/DeleteBlog");
const RegisterCustomer = require("./api/routes/RegisterCustomer");
const AddUserLoginSession = require("./api/routes/AddUserLoginSession");
const CustomerLoginAuth = require("./api/routes/CustomerLoginAuth");
const AddBlogComments= require("./api/routes/AddBlogComments");
const GetBlogComments= require("./api/routes/GetBlogComments");
const GetBlogCommentsToApprove= require("./api/routes/GetBlogCommentsToApprove");
const ApproveBlogComment= require("./api/routes/ApproveBlogComment");
const DeleteBlogComment= require("./api/routes/DeleteBlogComment");
const GetRegisteredCustomer= require("./api/routes/GetRegisteredCustomer");
const AddCustomerBlogLikeStatus= require("./api/routes/AddCustomerBlogLikeStatus");
const UpdateLikeCount= require("./api/routes/UpdateLikeCount");
const GetBlogCustomerLikedStatus= require("./api/routes/GetBlogCustomerLikedStatus");
const GetMarketer= require("./api/routes/GetMarketer");

const AddDevice= require("./api/routes/AddDevice");
const GetDevice= require("./api/routes/GetDevice");
const UpdateDevice= require("./api/routes/UpdateDevice");
const AddDeviceImageMapping= require("./api/routes/AddDeviceImageMapping");
const GetDeviceImage= require("./api/routes/GetDeviceImage");
const AddDeviceVendorMapping= require("./api/routes/AddDeviceVendorMapping");
const GetDeviceVendorMapping= require("./api/routes/GetDeviceVendorMapping");

const AddBook= require("./api/routes/AddBook");
const GetBooks= require("./api/routes/GetBooks");
const UpdateBook= require("./api/routes/UpdateBook");
const AddBookImageMapping= require("./api/routes/AddBookImageMapping");
const GetBookImage= require("./api/routes/GetBookImage");
const AddBookVendorMapping= require("./api/routes/AddBookVendorMapping");
const GetBookVendorMapping= require("./api/routes/GetBookVendorMapping");

const AddAllopathyMedicine= require("./api/routes/AddAllopathyMedicine");
const GetAllopathyMedicine= require("./api/routes/GetAllopathyMedicine");
const AddAllopathyImageMapping= require("./api/routes/AddAllopathyImageMapping");
const UpdateAllopathicMedicine= require("./api/routes/UpdateAllopathicMedicine");
const GetMedicineAllopathyImage= require("./api/routes/GetMedicineAllopathyImage");

const AddAllopathyVendorMapping= require("./api/routes/AddAllopathyVendorMapping");
const GetAllopathyVendorMapping= require("./api/routes/GetAllopathyVendorMapping");

const AddAyurvedicMedicine= require("./api/routes/AddAyurvedicMedicine");
const GetAyurvedicMedicine= require("./api/routes/GetAyurvedicMedicine");
const AddAyurvedicImageMapping= require("./api/routes/AddAyurvedicImageMapping");
const GetMedicineAyuvedicMapping= require("./api/routes/GetMedicineAyuvedicMapping");
const UpdateAyurvedicMedicine= require("./api/routes/UpdateAyurvedicMedicine");
const GetMedicineAyuvedicImage= require("./api/routes/GetMedicineAyuvedicImage");

const AddAyurvedicVendorMapping= require("./api/routes/AddAyurvedicVendorMapping");
const GetAyurvedicVendorMapping= require("./api/routes/GetAyurvedicVendorMapping");

const AddFootCare= require("./api/routes/AddFootCare");
const GetFootCare= require("./api/routes/GetFootCare");
const AddFootCareImageMapping= require("./api/routes/AddFootCareImageMapping");
const AddFootCareSizeMapping= require("./api/routes/AddFootCareSizeMapping");
const GetFootCareImage= require("./api/routes/GetFootCareImage");
const UpdateFootCare= require("./api/routes/UpdateFootCare");
const GetFootCareSizeMapping= require("./api/routes/GetFootCareSizeMapping");
const AddFootcareVendorMapping= require("./api/routes/AddFootcareVendorMapping");
const GetFootcareVendorMapping= require("./api/routes/GetFootcareVendorMapping");


const AddVendor= require("./api/routes/AddVendor");
const AddVendorContactPerson= require("./api/routes/AddVendorContactPerson");
const GetVendor= require("./api/routes/GetVendor");
const UpdateVendor= require("./api/routes/UpdateVendor");
const GetVendorContactPerson= require("./api/routes/GetVendorContactPerson");
const UpdateVendorContactPerson= require("./api/routes/UpdateVendorContactPerson");


const AddOffer= require("./api/routes/AddOffer");
const UpdateOffer= require("./api/routes/UpdateOffer");
const GetOffer= require("./api/routes/GetOffer");

const AddDiagnosticTest= require("./api/routes/AddDiagnosticTest");
const UpdateDiagnosticTest= require("./api/routes/UpdateDiagnosticTest");
const GetDiagnosticTest= require("./api/routes/GetDiagnosticTest");
const AddDiagnosticTestFaqMapping= require("./api/routes/AddDiagnosticTestFaqMapping");
const GetDaignosticTestFaqMapping= require("./api/routes/GetDaignosticTestFaqMapping");


const GetHealthCenterDoctoMapping= require("./api/routes/GetHealthCenterDoctoMapping");
const AddHealthCenterDoctorMapping= require("./api/routes/AddHealthCenterDoctorMapping");
const UpdateHealthCenterDoctorMapping= require("./api/routes/UpdateHealthCenterDoctorMapping");


const GetHealthCenterNutritionistMapping= require("./api/routes/GetHealthCenterNutritionistMapping");
const AddHealthCenterNutritionistMapping= require("./api/routes/AddHealthCenterNutritionistMapping");
const UpdateHealthCenterNutritionistMapping= require("./api/routes/UpdateHealthCenterNutritionistMapping");

const AddFood= require("./api/routes/AddFood");
const AddFoodImageMapping= require("./api/routes/AddFoodImageMapping");
const GetFood= require("./api/routes/GetFood");
const GetFoodImage= require("./api/routes/GetFoodImage");
const UpdateFood= require("./api/routes/UpdateFood");
const AddFoodVendorMapping= require("./api/routes/AddFoodVendorMapping");
const GetFoodVendorMapping= require("./api/routes/GetFoodVendorMapping");


const GetBlogBackend= require("./api/routes/GetBlogBackend");



const AddSaltMaster= require("./api/routes/AddSaltMaster");
const UpdateSaltMaster= require("./api/routes/UpdateSaltMaster");
const GetSaltMaster= require("./api/routes/GetSaltMaster");
const DeleteSaltMaster= require("./api/routes/DeleteSaltMaster");
const AddContributor= require("./api/routes/AddContributor");
const UpdateContributor= require("./api/routes/UpdateContributor");
const GetContributor= require("./api/routes/GetContributor");
const GetHealthCenterContactPerson= require("./api/routes/GetHealthCenterContactPerson");
const AddHealthCenterContactPerson= require("./api/routes/AddHealthCenterContactPerson");
const UpdateHealthCenterContactPerson= require("./api/routes/UpdateHealthCenterContactPerson");
const AddOrder= require("./api/routes/AddOrder");
const AddOrderDetail= require("./api/routes/AddOrderDetail");
const GetNewOrders= require("./api/routes/GetNewOrders");
const GetOrderDetailData= require("./api/routes/GetOrderDetailData");
const AddOrderVendor= require("./api/routes/AddOrderVendor");
const GetVendorOrder= require("./api/routes/GetVendorOrder");
const UpdateShoppingCart= require("./api/routes/UpdateShoppingCart");
const DeleteShoppingCart= require("./api/routes/DeleteShoppingCart");
const DeleteShoppingCartItem= require("./api/routes/DeleteShoppingCartItem");
const AddWishlist= require("./api/routes/Web/AddWishlist");
const GetWishlistData= require("./api/routes/Web/GetWishlistData");
const DeleteWishlist= require("./api/routes/DeleteWishlist");
const DeleteWishlistItem= require("./api/routes/DeleteWishlistItem");
const UpdateWishlist= require("./api/routes/UpdateWishlist");
const CustomerOrderMailer= require("./api/routes/CustomerOrderMailer");


// ---------------------------- Web Api ------------------------------

const GetDoctorWeb= require("./api/routes/Web/GetDoctorWeb");
const GetBooksWeb= require("./api/routes/Web/GetBooksWeb");
const GetFootCareWeb= require("./api/routes/Web/GetFootCareWeb");
const GetDevicesWeb= require("./api/routes/Web/GetDevicesWeb");
const GetAllopathicMedicineWeb= require("./api/routes/Web/GetAllopathicMedicineWeb");
const GetAyurvedicMedicineWeb= require("./api/routes/Web/GetAyurvedicMedicineWeb");
const GetNutritionistWeb= require("./api/routes/Web/GetNutritionistWeb");
const GetBlogDetails= require("./api/routes/Web/GetBlogDetails");
const GetDoctorDetailsWeb= require("./api/routes/Web/GetDoctorDetailsWeb");
const GetDoctorHealthCenterWeb= require("./api/routes/Web/GetDoctorHealthCenterWeb");
const GetLabWeb= require("./api/routes/Web/GetLabWeb");
const GetLabDetailsWeb= require("./api/routes/Web/GetLabDetailsWeb");
const GetLabBranchesWeb= require("./api/routes/Web/GetLabBranchesWeb");

const GetNutritionistDetailsWeb= require("./api/routes/Web/GetNutritionistDetailsWeb");
const GetNutritionistHealthCenterWeb= require("./api/routes/Web/GetNutritionistHealthCenterWeb");
const GetBookDetailsWebsite= require("./api/routes/Web/GetBookDetailsWebsite");
const GetFootDetailsWebsite= require("./api/routes/Web/GetFootDetailsWebsite");
const GetShoppingCartData= require("./api/routes/Web/GetShoppingCartData");
const GetDeviceDetailsWebsite= require("./api/routes/Web/GetDeviceDetailsWebsite");
const GetAllopathyDetailsWebsite= require("./api/routes/Web/GetAllopathyDetailsWebsite");
const GetAyuvedicDetailsWebsite= require("./api/routes/Web/GetAyuvedicDetailsWebsite");
const GetFoodDetailsWebsite= require("./api/routes/Web/GetFoodDetailsWebsite");
const GetFoodWeb= require("./api/routes/Web/GetFoodWeb");
const GetHealthCenterDoctorWeb= require("./api/routes/Web/GetHealthCenterDoctorWeb");
const GetHealthCenterNutritionistWeb= require("./api/routes/Web/GetHealthCenterNutritionistWeb");



const AddShoppingCart= require("./api/routes/Web/AddShoppingCart");
const AddShippingAddressCustomer= require("./api/routes/Web/AddShippingAddressCustomer");
const GetShippingAddressCustomer= require("./api/routes/Web/GetShippingAddressCustomer");
const AddCustomerPrescription= require("./api/routes/Web/AddCustomerPrescription");


const GetBlogNine= require("./api/routes/Web/GetBlogNine");
const GetDoctorWebSix= require("./api/routes/Web/GetDoctorWebSix");
const GetNutritionistWebSix= require("./api/routes/Web/GetNutritionistWebSix");
const GetBlogCategoryWebsite= require("./api/routes/Web/GetBlogCategoryWebsite");
const GetBlogWithCategoryWebsite= require("./api/routes/Web/GetBlogWithCategoryWebsite");
const GetEmailExistsCustomer= require("./api/routes/Web/GetEmailExistsCustomer");
const GetSocialPosts= require("./api/routes/Web/GetSocialPosts");
const GetDevicesWebNine= require("./api/routes/Web/GetDevicesWebNine");
const GetBooksWebNine= require("./api/routes/Web/GetBooksWebNine");
const GetFootCareWebNine= require("./api/routes/Web/GetFootCareWebNine");


// ---------------------------- Web Api ------------------------------



// ---------------------------- Mailers ------------------------------

const CustomerRegistraionMailer= require("./api/routes/Web/CustomerRegistraionMailer");
const VerifyMailMailer= require("./api/routes/Web/VerifyMailMailer");
const IfEmailExists= require("./api/routes/Web/IfEmailExists");
const ForgotPasswordMailer= require("./api/routes/Web/ForgotPasswordMailer");
const UpdateCustomerPassword= require("./api/routes/Web/UpdateCustomerPassword");
const GetBlogTags= require("./api/routes/Web/GetBlogTags");
const ContactUsMailer= require("./api/routes/Web/ContactUsMailer");


// ---------------------------- Mobile Auth -------------------------

const VerifyMobileOTP= require("./api/routes/Web/VerifyMobileOTP");
const CustomerRegistraionMobileOTP= require("./api/routes/Web/CustomerRegistrationMobileOTP");
const CustomerAuthMobile_NewBackoffice = require("./api/routes/Backoffice-New-Api/Web/CustomerAuthMobile")
const CustomerLoginAuth_NewBackoffice = require("./api/routes/Backoffice-New-Api/Web/CustomerLoginAuth")
const GetUserInfoEmail_NewBackoffice = require("./api/routes/Backoffice-New-Api/Web/GetUserInfoEmail")
// ---------------------------- Mailers ------------------------------




const AddImage = require("./api/routes/AddImage");
const AddPdf = require("./api/routes/AddPdf");

const UrlToBase64 = require("./api/routes/UrlToBase64");

const TestDeleteImage = require("./api/routes/TestDeleteImage");




//-----------------------------------------New API -------------------------------------------------------------






//----------- AUTH-----------------

const AuthenticateStaff_NewBackoffice = require("./api/routes/Backoffice-New-Api/AuthenticateStaff")
const VendorAuth_NewBackoffice = require("./api/routes/Backoffice-New-Api/VendorAuth")
const IfMobileExists_NewBackoffice = require("./api/routes/Backoffice-New-Api/Web/IfMobileExists")

//----------- ADD ------------------

const AddStaffLoginSession_NewBackoffice = require("./api/routes/Backoffice-New-Api/AddStaffLoginSession")
const AddStaff_NewBackoffice = require("./api/routes/Backoffice-New-Api/AddStaff")

const AddCompanyMaster_NewBackoffice = require("./api/routes/Backoffice-New-Api/AddCompanyMaster")
const AddBrandMaster_NewBackoffice = require("./api/routes/Backoffice-New-Api/AddBrandMaster")
const AddFoodCategoryMaster_NewBackoffice = require("./api/routes/Backoffice-New-Api/AddFoodCategoryMaster")
const AddFoodFilterMaster_NewBackoffice = require("./api/routes/Backoffice-New-Api/AddFoodFilterMaster")
const AddBookLanguageMaster_NewBackoffice = require("./api/routes/Backoffice-New-Api/AddBookLanguageMaster")
const AddBookCategoryMaster_NewBackoffice = require("./api/routes/Backoffice-New-Api/AddBookCategoryMaster")
const AddDeviceCategoryMaster_NewBackoffice = require("./api/routes/Backoffice-New-Api/AddDeviceCategoryMaster")
const AddDeviceFilterMaster_NewBackoffice = require("./api/routes/Backoffice-New-Api/AddDeviceFilterMaster")
const AddFootwearTypeMaster_NewBackoffice = require("./api/routes/Backoffice-New-Api/AddFootwearTypeMaster")
const AddFootwearColorMaster_NewBackoffice = require("./api/routes/Backoffice-New-Api/AddFootwearColorMaster")
const AddFootwearSizeMaster_NewBackoffice = require("./api/routes/Backoffice-New-Api/AddFootwearSizeMaster")
const AddSocksSizeMaster_NewBackoffice = require("./api/routes/Backoffice-New-Api/AddSocksSizeMaster")
const AddSaltMaster_NewBackoffice = require("./api/routes/Backoffice-New-Api/AddSaltMaster")
const AddPackagingTypeMaster_NewBackoffice = require("./api/routes/Backoffice-New-Api/AddPackagingTypeMaster")
const AddContributor_NewBackoffice = require("./api/routes/Backoffice-New-Api/AddContributor")
const AddDosageFormMaster_NewBackoffice = require("./api/routes/Backoffice-New-Api/AddDosageFormMaster")
const AddMedicineCategoryMaster_NewBackoffice = require("./api/routes/Backoffice-New-Api/AddMedicineCategoryMaster")
const AddTagMaster_NewBackoffice = require("./api/routes/Backoffice-New-Api/AddTagMaster")
const AddArticleCategoryMaster_NewBackoffice = require("./api/routes/Backoffice-New-Api/AddArticleCategoryMaster")
const AddArticleSubCategoryMaster_NewBackoffice = require("./api/routes/Backoffice-New-Api/AddArticleSubCategoryMaster")
const AddFlavourMaster_NewBackoffice = require("./api/routes/Backoffice-New-Api/AddFlavourMaster")
const AddArticle_NewBackoffice = require("./api/routes/Backoffice-New-Api/AddArticle")
const AddArticleTagMapping_NewBackoffice = require("./api/routes/Backoffice-New-Api/AddArticleTagMapping")
const AddDoctor_NewBackoffice = require("./api/routes/Backoffice-New-Api/AddDoctor")
const AddDoctorQualificationMapping_NewBackoffice = require("./api/routes/Backoffice-New-Api/AddDoctorQualificationMapping")
const AddDoctorSpecialisationMapping_NewBackoffice = require("./api/routes/Backoffice-New-Api/AddDoctorSpecialisationMapping")
const AddDoctorCertificateMapping_NewBackoffice = require("./api/routes/Backoffice-New-Api/AddDoctorCertificateMapping")
const AddDietitian_NewBackoffice = require("./api/routes/Backoffice-New-Api/AddDietitian")
const AddDietitianQualificationMapping_NewBackoffice = require("./api/routes/Backoffice-New-Api/AddDietitianQualificationMapping")
const AddDietitianCertificateMapping_NewBackoffice = require("./api/routes/Backoffice-New-Api/AddDietitianCertificateMapping")
const AddHealthCenter_NewBackoffice = require("./api/routes/Backoffice-New-Api/AddHealthCenter")
const AddHealthCenterServicesMapping_NewBackoffice = require("./api/routes/Backoffice-New-Api/AddHealthCenterServicesMapping")
const AddHealthCenterTimingsMapping_NewBackoffice = require("./api/routes/Backoffice-New-Api/AddHealthCenterTimingsMapping")
const AddHealthCenterFacilitiesMapping_NewBackoffice = require("./api/routes/Backoffice-New-Api/AddHealthCenterFacilitiesMapping")
const AddFoodItemMaster_NewBackoffice = require("./api/routes/Backoffice-New-Api/AddFoodItemMaster")
const AddBookItemMaster_NewBackoffice = require("./api/routes/Backoffice-New-Api/AddBookItemMaster")
const AddFoodItemMaster_FilterMapping_NewBackoffice = require("./api/routes/Backoffice-New-Api/AddFoodItemMaster_FilterMapping")
const AddFootwearItemMaster_NewBackoffice = require("./api/routes/Backoffice-New-Api/AddFootwearItemMaster")
const AddSocksItemMaster_NewBackoffice = require("./api/routes/Backoffice-New-Api/AddSocksItemMaster")
const AddSocksTypeMaster_NewBackoffice = require("./api/routes/Backoffice-New-Api/AddSocksTypeMaster")
const AddHealthCenterFacilitiesMaster_NewBackoffice = require("./api/routes/Backoffice-New-Api/AddHealthCenterFacilitiesMaster")
const AddFoodVariant_NewBackoffice = require("./api/routes/Backoffice-New-Api/AddFoodVariant")
const AddFoodVariantImage_NewBackoffice = require("./api/routes/Backoffice-New-Api/AddFoodVariantImage")
const AddFoodVariantVendorPricing_NewBackoffice = require("./api/routes/Backoffice-New-Api/AddFoodVariantVendorPricing")
const AddHealthCenterDoctorMapping_NewBackoffice = require("./api/routes/Backoffice-New-Api/AddHealthCenterDoctorMapping")
const AddHealthCenterDietitianMapping_NewBackoffice = require("./api/routes/Backoffice-New-Api/AddHealthCenterDietitianMapping")
const AddHealthCenterServicesMaster_NewBackoffice = require("./api/routes/Backoffice-New-Api/AddHealthCenterServicesMaster")
const AddCareer_NewBackoffice = require("./api/routes/Backoffice-New-Api/AddCareer")
const AddBookVariant_NewBackoffice = require("./api/routes/Backoffice-New-Api/AddBookVariant")
const AddBookVariantImage_NewBackoffice = require("./api/routes/Backoffice-New-Api/AddBookVariantImage")
const AddBookVariantVendorPricing_NewBackoffice = require("./api/routes/Backoffice-New-Api/AddBookVariantVendorPricing")
const AddFootwearVariant_NewBackoffice = require("./api/routes/Backoffice-New-Api/AddFootwearVariant")
const AddFootwearVariantImage_NewBackoffice = require("./api/routes/Backoffice-New-Api/AddFootwearVariantImage")
const AddFootwearVariantVendorPricing_NewBackoffice = require("./api/routes/Backoffice-New-Api/AddFootwearVariantVendorPricing")
const AddSocksVariant_NewBackoffice = require("./api/routes/Backoffice-New-Api/AddSocksVariant")
const AddSocksVariantImage_NewBackoffice = require("./api/routes/Backoffice-New-Api/AddSocksVariantImage")
const AddSocksVariantVendorPricing_NewBackoffice = require("./api/routes/Backoffice-New-Api/AddSocksVariantVendorPricing")
const AddVendor_NewBackoffice = require("./api/routes/Backoffice-New-Api/AddVendor")
const AddVendorFacilitiesMapping_NewBackoffice = require("./api/routes/Backoffice-New-Api/AddVendorFacilitiesMapping")
const AddVendorLicenseMapping_NewBackoffice = require("./api/routes/Backoffice-New-Api/AddVendorLicenseMapping")
const AddVendorAccreditationmapping_NewBackoffice = require("./api/routes/Backoffice-New-Api/AddVendorAccreditationmapping")
const AddVendorTimingMapping_NewBackoffice = require("./api/routes/Backoffice-New-Api/AddVendorTimingMapping")
const AddVendorContactPersonMapping_NewBackoffice = require("./api/routes/Backoffice-New-Api/AddVendorContactPersonMapping")
const AddSocksColorMaster_NewBackoffice = require("./api/routes/Backoffice-New-Api/AddSocksColorMaster")
const UpdateVendor_NewBackoffice = require("./api/routes/Backoffice-New-Api/UpdateVendor")
const AddVendorLicenseMaster_NewBackoffice = require("./api/routes/Backoffice-New-Api/AddVendorLicenseMaster")
const AddAccreditationMaster_NewBackoffice = require("./api/routes/Backoffice-New-Api/AddAccreditationMaster")
const AddVendorFacilityMaster_NewBackoffice = require("./api/routes/Backoffice-New-Api/AddVendorFacilityMaster")
const AddQualificationMaster_NewBackoffice = require("./api/routes/Backoffice-New-Api/AddQualificationMaster")
const AddSpecializationMaster_NewBackoffice = require("./api/routes/Backoffice-New-Api/AddSpecialisationMaster")
const AddOffer_NewBackoffice = require("./api/routes/Backoffice-New-Api/AddOffer")
const AddUserAddressMapping_NewBackoffice = require("./api/routes/Backoffice-New-Api/AddUserAddressMapping")
const AddOrder_NewBackoffice = require("./api/routes/Backoffice-New-Api/AddOrder")
const AddOrderDetail_NewBackoffice = require("./api/routes/Backoffice-New-Api/AddOrderDetail")
const AddSellWithUs_NewBackoffice = require("./api/routes/Backoffice-New-Api/AddSellWithUs")
const AddInsurance_NewBackoffice = require("./api/routes/Backoffice-New-Api/AddInsurance")
const AddUserFamilyInfoMapping_NewBackoffice = require("./api/routes/Backoffice-New-Api/AddUserFamilyInfoMapping")
const Add_ReturnMaster_NewBackoffice = require("./api/routes/Backoffice-New-Api/Add_ReturnMaster")






//----------- GET ------------------

const GetCompany_NewBackoffice = require("./api/routes/Backoffice-New-Api/GetCompany")
const GetDepartment_NewBackoffice = require("./api/routes/Backoffice-New-Api/GetDepartment")
const GetDesignation_NewBackoffice = require("./api/routes/Backoffice-New-Api/GetDesignation")
const GetUserType_NewBackoffice = require("./api/routes/Backoffice-New-Api/GetUserType")
const GetCountry_NewBackoffice = require("./api/routes/Backoffice-New-Api/GetCountry")
const GetState_NewBackoffice = require("./api/routes/Backoffice-New-Api/GetState")
const GetCity_NewBackoffice = require("./api/routes/Backoffice-New-Api/GetCity")
const GetStaff_NewBackoffice = require("./api/routes/Backoffice-New-Api/GetStaff")
const GetArticleCategory_NewBackoffice = require("./api/routes/Backoffice-New-Api/GetArticleCategory")
const GetArticleSubCategory_NewBackoffice = require("./api/routes/Backoffice-New-Api/GetArticleSubCategory")
const GetArticleTags_NewBackoffice = require("./api/routes/Backoffice-New-Api/GetArticleTags")
const GetBlogContributors_NewBackoffice = require("./api/routes/Backoffice-New-Api/GetBlogContributors")
const GetArticleList_NewBackoffice = require("./api/routes/Backoffice-New-Api/GetArticleList")
const GetQualification_NewBackoffice = require("./api/routes/Backoffice-New-Api/GetQualification")
const GetSpecialisation_NewBackoffice = require("./api/routes/Backoffice-New-Api/GetSpecialisation")
const GetDoctorList_NewBackoffice = require("./api/routes/Backoffice-New-Api/GetDoctorList")
const GetPackagingTypeData_NewBackoffice = require("./api/routes/Backoffice-New-Api/GetPackagingTypeData")
const GetVendorData_NewBackoffice = require("./api/routes/Backoffice-New-Api/GetVendorData")
const GetHealthCenterData_NewBackoffice = require("./api/routes/Backoffice-New-Api/GetHealthCenterData")
const GetHealthCenterDoctorMappingList_NewBackoffice = require("./api/routes/Backoffice-New-Api/GetHealthCenterDoctorMappingList")
const GetHealthCenterDietitianMappingList_NewBackoffice = require("./api/routes/Backoffice-New-Api/GetHealthCenterDietitianMappingList")
const GetFoodVariantList_NewBackoffice = require("./api/routes/Backoffice-New-Api/GetFoodVariantList")
const GetBookLanguageData_NewBackoffice = require("./api/routes/Backoffice-New-Api/GetBookLanguageData")
const GetBookTypeData_NewBackoffice = require("./api/routes/Backoffice-New-Api/GetBookTypeData")
const GetBookVariantList_NewBackoffice = require("./api/routes/Backoffice-New-Api/GetBookVariantList")
const GetFootwearColorData_NewBackoffice = require("./api/routes/Backoffice-New-Api/GetFootwearColorData")
const GetFootwearSizeData_NewBackoffice = require("./api/routes/Backoffice-New-Api/GetFootwearSizeData")
const GetSocksColorData_NewBackoffice = require("./api/routes/Backoffice-New-Api/GetSocksColorData")
const GetSocksSizeData_NewBackoffice = require("./api/routes/Backoffice-New-Api/GetSocksSizeData")
const GetFootwearVariantList_NewBackoffice = require("./api/routes/Backoffice-New-Api/GetFootwearVariantList")
const GetSocksVariantList_NewBackoffice = require("./api/routes/Backoffice-New-Api/GetSocksVariantList")
const GetVendorFacilitiesData_NewBackoffice = require("./api/routes/Backoffice-New-Api/GetVendorFacilitiesData")
const GetVendorLicenseData_NewBackoffice = require("./api/routes/Backoffice-New-Api/GetVendorLicenseData")
const GetVendorAccreditationData_NewBackoffice = require("./api/routes/Backoffice-New-Api/GetVendorAccreditationData")
const GetVendorList_NewBackoffice = require("./api/routes/Backoffice-New-Api/GetVendorList")
const GetUserAddressMapping_NewBackoffice = require("./api/routes/Backoffice-New-Api/GetUserAddressMapping")

const GetOrderVendor_NewBackoffice = require("./api/routes/Backoffice-New-Api/GetOrderVendor")

const GetVendorOrderById_NewBackoffice = require("./api/routes/Backoffice-New-Api/GetVendorOrderByID")
const GetSellWithUs_NewBackoffice = require("./api/routes/Backoffice-New-Api/GetSellWithUs")
const GetInsurance_NewBackoffice = require("./api/routes/Backoffice-New-Api/GetInsurance")
const GetCareerByID_NewBackoffice = require("./api/routes/Backoffice-New-Api/GetCareerByID")
const GetUserInfoByID_NewBackoffice = require("./api/routes/Backoffice-New-Api/GetUserInfoByID")






//----------- GET MASTER ------------------

const GetBookCategoryList_NewBackoffice = require("./api/routes/Backoffice-New-Api/GetBookCategoryList")
const GetBookLanguageList_NewBackoffice = require("./api/routes/Backoffice-New-Api/GetBookLanguageList")
const GetFoodFilterList_NewBackoffice = require("./api/routes/Backoffice-New-Api/GetFoodFilterList")
const GetFoodCategoryList_NewBackoffice = require("./api/routes/Backoffice-New-Api/GetFoodCategoryList")
const GetBrandList_NewBackoffice = require("./api/routes/Backoffice-New-Api/GetBrandList")
const GetDeviceCategoryList_NewBackoffice = require("./api/routes/Backoffice-New-Api/GetDeviceCategoryList")
const GetDeviceFilter_NewBackoffice = require("./api/routes/Backoffice-New-Api/GetDeviceFilter")
const GetCompanyList_NewBackoffice = require("./api/routes/Backoffice-New-Api/GetCompanyList")
const GetFootwareTypeList_NewBackoffice = require("./api/routes/Backoffice-New-Api/GetFootwareTypeList")
const GetFootwareColorList_NewBackoffice = require("./api/routes/Backoffice-New-Api/GetFootwareColorList")
const GetFootwareSizeList_NewBackoffice = require("./api/routes/Backoffice-New-Api/GetFootwareSizeList")
const GetSocksSizeList_NewBackoffice = require("./api/routes/Backoffice-New-Api/GetSocksSizeList")
const GetSaltList_NewBackoffice = require("./api/routes/Backoffice-New-Api/GetSaltList")
const GetPackagingTypeList_NewBackoffice = require("./api/routes/Backoffice-New-Api/GetPackagingTypeList")
const GetDosageFormList_NewBackoffice = require("./api/routes/Backoffice-New-Api/GetDosageFormList")
const GetMedicineCategoryList_NewBackoffice = require("./api/routes/Backoffice-New-Api/GetMedicineCategoryList")
const GetTagMasterList_NewBackoffice = require("./api/routes/Backoffice-New-Api/GetTagMasterList")
const GetArticleCategoryMasterList_NewBackoffice = require("./api/routes/Backoffice-New-Api/GetArticleCategoryMasterList")
const GetArticleSubCategoryMasterList_NewBackoffice = require("./api/routes/Backoffice-New-Api/GetArticleSubCategoryMasterList")
const GetContributors_NewBackoffice = require("./api/routes/Backoffice-New-Api/GetContributors")
const GetFlavourMaster_NewBackoffice = require("./api/routes/Backoffice-New-Api/GetFlavourMaster")
const GetHealthCenterFacilities_NewBackoffice = require("./api/routes/Backoffice-New-Api/GetHealthCenterFacilities")
const GetHealthCenterServices_NewBackoffice = require("./api/routes/Backoffice-New-Api/GetHealthCenterServices")
const GetHealthCenterList_NewBackoffice = require("./api/routes/Backoffice-New-Api/GetHealthCenterList")
const GetDietitianList_NewBackoffice = require("./api/routes/Backoffice-New-Api/GetDietitianList")
const GetBrandData_NewBackoffice = require("./api/routes/Backoffice-New-Api/GetBrandData")
const GetFoodCategoryData_NewBackoffice = require("./api/routes/Backoffice-New-Api/GetFoodCategoryData")
const GetFoodFilterData_NewBackoffice = require("./api/routes/Backoffice-New-Api/GetFoodFilterData")
const GetFoodFlavourData_NewBackoffice = require("./api/routes/Backoffice-New-Api/GetFoodFlavourData")
const GetGstData_NewBackoffice = require("./api/routes/Backoffice-New-Api/GetGstData")
const GetBookCategoryData_NewBackoffice = require("./api/routes/Backoffice-New-Api/GetBookCategoryData")
const GetBookItemMaster_NewBackoffice = require("./api/routes/Backoffice-New-Api/GetBookItemMaster")
const GetFoodItemMaster_NewBackoffice = require("./api/routes/Backoffice-New-Api/GetFoodItemMaster")
const GetFootwearTypeMaster_NewBackoffice = require("./api/routes/Backoffice-New-Api/GetFootwearTypeMaster")
const GetFootwearItemMaster_NewBackoffice = require("./api/routes/Backoffice-New-Api/GetFootwearItemMaster")
const GetSocksItemMaster_NewBackoffice = require("./api/routes/Backoffice-New-Api/GetSocksItemMaster")
const GetSocksTypeMaster_NewBackoffice = require("./api/routes/Backoffice-New-Api/GetSocksTypeMaster")
const GetSocksTypeMasterGrid_NewBackoffice = require("./api/routes/Backoffice-New-Api/GetSocksTypeMasterGrid")
const GetHealthCenterFacilitiesMaster_NewBackoffice = require("./api/routes/Backoffice-New-Api/GetHealthCenterFacilitiesMaster")
const GetHealthCenterServicesMaster_NewBackoffice = require("./api/routes/Backoffice-New-Api/GetHealthCenterServicesMaster")
const GetCareer_NewBackoffice = require("./api/routes/Backoffice-New-Api/GetCareer")
const GetSocksColorMasterList_NewBackoffice = require("./api/routes/Backoffice-New-Api/GetSocksColorMasterList")
const GetVendorLicenseMasterList_NewBackoffice = require("./api/routes/Backoffice-New-Api/GetVendorLicenseMasterList")
const GetAccreditationMasterList_NewBackoffice = require("./api/routes/Backoffice-New-Api/GetAccreditationMasterList")
const GetVendorFacilitiesMasterList_NewBackoffice = require("./api/routes/Backoffice-New-Api/GetVendorFacilitiesMasterList")
const GetQualificationMasterList_NewBackoffice = require("./api/routes/Backoffice-New-Api/GetQualificationMasterList")
const GetSpecializationMasterList_NewBackoffice = require("./api/routes/Backoffice-New-Api/GetSpecialisationMasterList")
const GetUserInfoData_NewBackoffice = require("./api/routes/Backoffice-New-Api/GetUserInfoData")
const GetOffer_NewBackoffice = require("./api/routes/Backoffice-New-Api/GetOffer")
const GetHealthCenterDoctorMapping_NewBackoffice = require("./api/routes/Backoffice-New-Api/GetHealthCenterDoctorMapping")
const GetHealthCenterDietitianMapping_NewBackoffice = require("./api/routes/Backoffice-New-Api/GetHealthCenterDietitianMapping")
const IfEmailExistsSocial_NewBackoffice = require("./api/routes/Backoffice-New-Api/IfEmailExistsSocial")
const GetCareerWebsite_NewBackoffice = require("./api/routes/Backoffice-New-Api/GetCareerWebsite")







const GetUserMenu_NewBackoffice = require("./api/routes/Backoffice-New-Api/GetUserMenu")
const GetUserSubMenu_NewBackoffice = require("./api/routes/Backoffice-New-Api/GetUserSubMenu")

const GetMenuList_NewBackoffice = require("./api/routes/Backoffice-New-Api/GetMenuList")
const GetSubMenuList_NewBackoffice = require("./api/routes/Backoffice-New-Api/GetSubMenuList")

const AddUserMenu_NewBackoffice = require("./api/routes/Backoffice-New-Api/AddUserMenu")
const AddUserSubMenu_NewBackoffice = require("./api/routes/Backoffice-New-Api/AddUserSubMenu")

const GetUserSubMenuAccessRights_NewBackoffice = require("./api/routes/Backoffice-New-Api/GetUserSubMenuAccessRights")


const GetUserMenuList_NewBackoffice = require("./api/routes/Backoffice-New-Api/GetUserMenuList")
const GetUserSubMenuList_NewBackoffice = require("./api/routes/Backoffice-New-Api/GetUserSubMenuList")


const UpdateMenuRights_NewBackoffice = require("./api/routes/Backoffice-New-Api/UpdateMenuRights")
const UpdateSubMenuRights_NewBackoffice = require("./api/routes/Backoffice-New-Api/UpdateSubMenuRights")

//-------------- UPDATE ---------------
const ChangeVendorPassword_NewBackoffice = require("./api/routes/Backoffice-New-Api/ChangeVendorPassword")
const ChangePassword_NewBackoffice = require("./api/routes/Backoffice-New-Api/ChangePassword")
const UpdateStaff_NewBackoffice = require("./api/routes/Backoffice-New-Api/UpdateStaff")
const UpdateContributor_NewBackoffice = require("./api/routes/Backoffice-New-Api/UpdateContributor")
const UpdateFoodCategoryMaster_NewBackoffice = require("./api/routes/Backoffice-New-Api/UpdateFoodCategoryMaster")
const UpdateFoodFilterMaster_NewBackoffice = require("./api/routes/Backoffice-New-Api/UpdateFoodFilterMaster")
const UpdateBookLanguageMaster_NewBackoffice = require("./api/routes/Backoffice-New-Api/UpdateBookLanguageMaster")
const UpdateBookCategoryMaster_NewBackoffice = require("./api/routes/Backoffice-New-Api/UpdateBookCategoryMaster")
const UpdateDeviceCategoryMaster_NewBackoffice = require("./api/routes/Backoffice-New-Api/UpdateDeviceCategoryMaster")
const UpdateDeviceFilterMaster_NewBackoffice = require("./api/routes/Backoffice-New-Api/UpdateDeviceFilterMaster")
const UpdateFootwearTypeMaster_NewBackoffice = require("./api/routes/Backoffice-New-Api/UpdateFootwearTypeMaster")
const UpdateFootwearSizeMaster_NewBackoffice = require("./api/routes/Backoffice-New-Api/UpdateFootwearSizeMaster")
const UpdateFootwearColorMaster_NewBackoffice = require("./api/routes/Backoffice-New-Api/UpdateFootwearColorMaster")
const UpdateSocksSizeMaster_NewBackoffice = require("./api/routes/Backoffice-New-Api/UpdateSocksSizeMaster")
const UpdateSaltMaster_NewBackoffice = require("./api/routes/Backoffice-New-Api/UpdateSaltMaster")
const UpdatePackagingTypeMaster_NewBackoffice = require("./api/routes/Backoffice-New-Api/UpdatePackagingTypeMaster")
const UpdateDosageFormMaster_NewBackoffice = require("./api/routes/Backoffice-New-Api/UpdateDosageFormMaster")
const UpdateTagMaster_NewBackoffice = require("./api/routes/Backoffice-New-Api/UpdateTagMaster")
const UpdateArticleSubCategoryMaster_NewBackoffice = require("./api/routes/Backoffice-New-Api/UpdateArticleSubCategoryMaster")
const UpdateArticleCategoryMaster_NewBackoffice = require("./api/routes/Backoffice-New-Api/UpdateArticleCategoryMaster")
const UpdateFlavourMaster_NewBackoffice = require("./api/routes/Backoffice-New-Api/UpdateFlavourMaster")
const UpdateCompanyLogo_NewBackoffice = require("./api/routes/Backoffice-New-Api/UpdateCompanyLogo")
const UpdateCompanyMaster_NewBackoffice = require("./api/routes/Backoffice-New-Api/UpdateCompanyMaster")
const UpdateBrandLogo_NewBackoffice = require("./api/routes/Backoffice-New-Api/UpdateBrandLogo")
const UpdateBrandMaster_NewBackoffice = require("./api/routes/Backoffice-New-Api/UpdateBrandMaster")
const UpdateContributorPhoto_NewBackoffice = require("./api/routes/Backoffice-New-Api/UpdateContributorPhoto")
const UpdateArticlePreviewPhoto_NewBackoffice = require("./api/routes/Backoffice-New-Api/UpdateArticlePreviewPhoto")
const UpdateArticleCoverPhoto_NewBackoffice = require("./api/routes/Backoffice-New-Api/UpdateArticleCoverPhoto")
const UpdateDietitianPhoto_NewBackoffice = require("./api/routes/Backoffice-New-Api/UpdateDietitianPhoto")
const UpdateDietitianConsent_NewBackoffice = require("./api/routes/Backoffice-New-Api/UpdateDietitianConsent")
const UpdateDietitianPdf_NewBackoffice = require("./api/routes/Backoffice-New-Api/UpdateDietitianPdf")
const UpdateDoctorPhoto_NewBackoffice = require("./api/routes/Backoffice-New-Api/UpdateDoctorPhoto")
const UpdateDoctorConsent_NewBackoffice = require("./api/routes/Backoffice-New-Api/UpdateDoctorConsent")
const UpdateDoctorPdf_NewBackoffice = require("./api/routes/Backoffice-New-Api/UpdateDoctorPdf")
const UpdateStaffPhoto_NewBackoffice = require("./api/routes/Backoffice-New-Api/UpdateStaffPhoto")
const UpdateDoctor_NewBackoffice = require("./api/routes/Backoffice-New-Api/UpdateDoctor")
const UpdateArticle_NewBackoffice = require("./api/routes/Backoffice-New-Api/UpdateArticle")
const UpdateHealthCenter_NewBackoffice = require("./api/routes/Backoffice-New-Api/UpdateHealthCenter")
const UpdateDietitian_NewBackoffice = require("./api/routes/Backoffice-New-Api/UpdateDietitian")
const UpdateBookItemMaster_NewBackoffice = require("./api/routes/Backoffice-New-Api/UpdateBookItemMaster")
const UpdateFoodItemMaster_NewBackoffice = require("./api/routes/Backoffice-New-Api/UpdateFoodItemMaster")
const UpdateFootwearItemMaster_NewBackoffice = require("./api/routes/Backoffice-New-Api/UpdateFootwearItemMaster")
const UpdateSocksItemMaster_NewBackoffice = require("./api/routes/Backoffice-New-Api/UpdateSocksItemMaster")
const UpdateSocksTypeMaster_NewBackoffice = require("./api/routes/Backoffice-New-Api/UpdateSocksTypeMaster")
const UpdateHealthCenterFacilitiesMaster_NewBackoffice = require("./api/routes/Backoffice-New-Api/UpdateHealthCenterFacilitiesMaster")
const UpdateHealthCenterServicesMaster_NewBackoffice = require("./api/routes/Backoffice-New-Api/UpdateHealthCenterServicesMaster")
const UpdateCareer_NewBackoffice = require("./api/routes/Backoffice-New-Api/UpdateCareer")
const UpdateVendorCheque_NewBackoffice = require("./api/routes/Backoffice-New-Api/UpdateVendorCheque")
const UpdateVendorLogo_NewBackoffice = require("./api/routes/Backoffice-New-Api/UpdateVendorLogo")
const UpdateSocksColorMaster_NewBackoffice = require("./api/routes/Backoffice-New-Api/UpdateSocksColorMaster")
const UpdateVendorLicenseMaster_NewBackoffice = require("./api/routes/Backoffice-New-Api/UpdateVendorLicenseMaster")
const UpdateAccreditationMaster_NewBackoffice = require("./api/routes/Backoffice-New-Api/UpdateAccreditationMaster")
const UpdateAccreditationMasterLogo_NewBackoffice = require("./api/routes/Backoffice-New-Api/UpdateAccreditationMasterLogo")
const UpdateFoodVariant_NewBackoffice = require("./api/routes/Backoffice-New-Api/UpdateFoodVariant")
const UpdateBookVariant_NewBackoffice = require("./api/routes/Backoffice-New-Api/UpdateBookVariant")
const UpdateFootwearVariant_NewBackoffice = require("./api/routes/Backoffice-New-Api/UpdateFootwearVariant")
const UpdateSocksVariant_NewBackoffice = require("./api/routes/Backoffice-New-Api/UpdateSocksVariant")
const UpdateVendorFacilitiesMaster_NewBackoffice = require("./api/routes/Backoffice-New-Api/UpdateVendorFacilitiesMaster")
const UpdateQualificationMaster_NewBackoffice = require("./api/routes/Backoffice-New-Api/UpdateQualificationMaster")
const UpdateSpecializationMaster_NewBackoffice = require("./api/routes/Backoffice-New-Api/UpdateSpecialisationMaster")
const UpdateDoctorApprovalStatus_NewBackoffice = require("./api/routes/Backoffice-New-Api/UpdateDoctorApprovalStatus")
const UpdateDietitianApprovalStatus_NewBackoffice = require("./api/routes/Backoffice-New-Api/UpdateDietitianApprovalStatus")
const UpdateHealthCenterApprovalStatus_NewBackoffice = require("./api/routes/Backoffice-New-Api/UpdateHealthCenterApprovalStatus")
const UpdateVendorApprovalStatus_NewBackoffice = require("./api/routes/Backoffice-New-Api/UpdateVendorApprovalStatus")
const UpdateFoodItemMasterApprovalStatus_NewBackoffice = require("./api/routes/Backoffice-New-Api/UpdateFoodItemMasterApprovalStatus")
const UpdateFootwearItemMasterApprovalStatus_NewBackoffice = require("./api/routes/Backoffice-New-Api/UpdateFootwearItemMasterApprovalStatus")
const UpdateBooksItemMasterApprovalStatus_NewBackoffice = require("./api/routes/Backoffice-New-Api/UpdateBooksItemMasterApprovalStatus")
const UpdateSocksItemMasterApprovalStatus_NewBackoffice = require("./api/routes/Backoffice-New-Api/UpdateSocksItemMasterApprovalStatus")
const UpdateFoodVariantApprovalStatus_NewBackoffice = require("./api/routes/Backoffice-New-Api/UpdateFoodVariantApprovalStatus")
const UpdateFootwearVariantApprovalStatus_NewBackoffice = require("./api/routes/Backoffice-New-Api/UpdateFootwearVariantApprovalStatus")
const UpdateBookVariantApprovalStatus_NewBackoffice = require("./api/routes/Backoffice-New-Api/UpdateBooksItemMasterApprovalStatus")
const UpdateSocksVariantApprovalStatus_NewBackoffice = require("./api/routes/Backoffice-New-Api/UpdateSocksVariantApprovalStatus")
const UpdateOffer_NewBackoffice = require("./api/routes/Backoffice-New-Api/UpdateOffer")
const UpdateUserInfoBasic_NewBackoffice = require("./api/routes/Backoffice-New-Api/UpdateUserInfoBasic")

const UpdateUserDiabeticProfile_NewBackoffice = require("./api/routes/Backoffice-New-Api/UpdateUserDiabeticProfile")

const Updateblogpublish_NewBackoffice = require("./api/routes/Backoffice-New-Api/Updateblogpublish")


//-------------- DELETE ---------------

const DeleteCompanyMaster_NewBackoffice = require("./api/routes/Backoffice-New-Api/DeleteCompanyMaster")
const DeleteBrandMaster_NewBackoffice = require("./api/routes/Backoffice-New-Api/DeleteBrandMaster")
const DeleteFoodCategoryMaster_NewBackoffice = require("./api/routes/Backoffice-New-Api/DeleteFoodCategoryMaster")
const DeleteFoodFilterMaster_NewBackoffice = require("./api/routes/Backoffice-New-Api/DeleteFoodFilterMaster")
const DeleteBookLanguageMaster_NewBackoffice = require("./api/routes/Backoffice-New-Api/DeleteBookLanguageMaster")
const DeleteBookCategoryMaster_NewBackoffice = require("./api/routes/Backoffice-New-Api/DeleteBookCategoryMaster")
const DeleteDeviceCategoryMaster_NewBackoffice = require("./api/routes/Backoffice-New-Api/DeleteDeviceCategoryMaster")
const DeleteDeviceFilterMaster_NewBackoffice = require("./api/routes/Backoffice-New-Api/DeleteDeviceFilterMaster")
const DeleteFootwareTypeMaster_NewBackoffice = require("./api/routes/Backoffice-New-Api/DeleteFootwareTypeMaster")
const DeleteFootwareColorMaster_NewBackoffice = require("./api/routes/Backoffice-New-Api/DeleteFootwareColorMaster")
const DeleteFootwareSizeMaster_NewBackoffice = require("./api/routes/Backoffice-New-Api/DeleteFootwareSizeMaster")
const DeleteSocksSizeMaster_NewBackoffice = require("./api/routes/Backoffice-New-Api/DeleteSocksSizeMaster")
const DeleteSaltMaster_NewBackoffice = require("./api/routes/Backoffice-New-Api/DeleteSaltMaster")
const DeletePackagingTypeMaster_NewBackoffice = require("./api/routes/Backoffice-New-Api/DeletePackagingTypeMaster")
const DeleteDosageFormMaster_NewBackoffice = require("./api/routes/Backoffice-New-Api/DeleteDosageFormMaster")
const DeleteMedicineCategoryMaster_NewBackoffice = require("./api/routes/Backoffice-New-Api/DeleteMedicineCategoryMaster")
const DeleteTagMaster_NewBackoffice = require("./api/routes/Backoffice-New-Api/DeleteTagMaster")
const DeleteArticleCategoryMaster_NewBackoffice = require("./api/routes/Backoffice-New-Api/DeleteArticleCategoryMaster")
const DeleteArticleSubCategoryMaster_NewBackoffice = require("./api/routes/Backoffice-New-Api/DeleteArticleSubCategoryMaster")
const DeleteFlavourMaster_NewBackoffice = require("./api/routes/Backoffice-New-Api/DeleteFlavourMaster")
const DeleteDoctorCertificate_NewBackoffice = require("./api/routes/Backoffice-New-Api/DeleteDoctorCertificate")
const DeleteDietitianCertificate_NewBackoffice = require("./api/routes/Backoffice-New-Api/DeleteDietitianCertificate")
const DeleteSocksTypeMaster_NewBackoffice =  require("./api/routes/Backoffice-New-Api/DeleteSocksTypeMaster")
const DeleteHealthCenterFacilitiesMaster_NewBackoffice =  require("./api/routes/Backoffice-New-Api/DeleteHealthCenterFacilitiesMaster")
// const DeleteHealthCenterServicesMaster_NewBackoffice =  require("./api/routes/Backoffice-New-Api/DeleteHealthCenterServicesMaster")
const DeleteHealthCenterDoctorMapping_NewBackoffice = require("./api/routes/Backoffice-New-Api/DeleteHealthCenterDoctorMapping")
const DeleteHealthCenterDietitianMapping_NewBackoffice = require("./api/routes/Backoffice-New-Api/DeleteHealthCenterDietitianMapping")
const DeleteSocksColorMaster_NewBackoffice = require("./api/routes/Backoffice-New-Api/DeleteSocksColorMaster")
const DeleteVendorLicenseMaster_NewBackoffice = require("./api/routes/Backoffice-New-Api/DeleteVendorLicenseMaster")
const DeleteAccreditationMaster_NewBackoffice = require("./api/routes/Backoffice-New-Api/DeleteAccreditationMaster")
const DeleteFoodVariantImage_NewBackoffice = require("./api/routes/Backoffice-New-Api/DeleteFoodVariantImage")
const DeleteBookVariantImage_NewBackoffice = require("./api/routes/Backoffice-New-Api/DeleteBookVariantImage")
const DeleteFootwearVariantImage_NewBackoffice = require("./api/routes/Backoffice-New-Api/DeleteFootwearVariantImage")
const DeleteSocksVariantImage_NewBackoffice = require("./api/routes/Backoffice-New-Api/DeleteSocksVariantImage")
const DeleteHealthCenterServicesMaster_NewBackoffice = require("./api/routes/Backoffice-New-Api/DeleteHealthCenterServicesMaster")
const DeleteQualificationMaster_NewBackoffice  = require("./api/routes/Backoffice-New-Api/DeleteQualificationMaster")
const DeleteSpecializationMaster_NewBackoffice = require("./api/routes/Backoffice-New-Api/DeleteSpecialisationMaster")
const DeleteVendorFacilityMaster_NewBackoffice = require("./api/routes/Backoffice-New-Api/DeleteVendorFacilityMaster")
const DeleteUserAddressMapping_NewBackoffice = require("./api/routes/Backoffice-New-Api/DeleteUserAddressMapping")
const DeleteUserFamilyInfoMapping_NewBackoffice = require("./api/routes/Backoffice-New-Api/DeleteUserFamilyInfoMapping")




//----------- Web ------------------
const GetBlogNine_NewBackoffice = require("./api/routes/Backoffice-New-Api/Web/GetBlogNine")
const GetDoctorWebSix_NewBackoffice = require("./api/routes/Backoffice-New-Api/Web/GetDoctorWebSix")
const GetNutritionistWebSix_NewBackoffice = require("./api/routes/Backoffice-New-Api/Web/GetNutritionistWebSix")
const GetDoctorWeb_NewBackoffice = require("./api/routes/Backoffice-New-Api/Web/GetDoctorWeb")
const GetNutritionistWeb_NewBackoffice = require("./api/routes/Backoffice-New-Api/Web/GetNutritionistWeb")
const GetDoctorDetailsWeb_NewBackoffice = require("./api/routes/Backoffice-New-Api/Web/GetDoctorDetailsWeb")
const GetSocialPosts_NewBackoffice = require("./api/routes/Backoffice-New-Api/Web/GetSocialPosts")
const GetNutritionistDetailsWeb_NewBackoffice = require("./api/routes/Backoffice-New-Api/Web/GetNutritionistDetailsWeb")
const GetBlogCategoryWebsite_NewBackoffice = require("./api/routes/Backoffice-New-Api/Web/GetBlogCategoryWebsite")
const GetBlogDetails_NewBackoffice = require("./api/routes/Backoffice-New-Api/Web/GetBlogDetails")
const GetBlogWithCategoryWebsite_NewBackoffice = require("./api/routes/Backoffice-New-Api/Web/GetBlogWithCategoryWebsite")
const GetContributorsWebsite_NewBackoffice = require("./api/routes/Backoffice-New-Api/Web/GetContributorsWebsite")
const GetContributorDetailsWebsite_NewBackoffice = require("./api/routes/Backoffice-New-Api/Web/GetContributorDetailsWebsite")
const IfEmailExists_NewBackoffice = require("./api/routes/Backoffice-New-Api/Web/IfEmailExists")

const VerifyMailMailer_NewBackoffice = require("./api/routes/Backoffice-New-Api/Web/VerifyMailMailer")
const VerifyMobileOTP_NewBackoffice = require("./api/routes/Backoffice-New-Api/Web/VerifyMobileOTP")
const RegisterCustomer_NewBackoffice = require("./api/routes/Backoffice-New-Api/Web/RegisterCustomer")
const CustomerRegistrationMailer_NewBackoffice = require("./api/routes/Backoffice-New-Api/Web/CustomerRegistrationMailer")
const CustomerRegistrationMobileOTP_NewBackoffice = require("./api/routes/Backoffice-New-Api/Web/CustomerRegistrationMobileOTP")

const AddUserLoginSession_NewBackoffice = require("./api/routes/Backoffice-New-Api/Web/AddUserLoginSession")
const ForgotPasswordMailer_NewBackoffice = require("./api/routes/Backoffice-New-Api/Web/ForgotPasswordMailer")
const UpdateCustomerPassword_NewBackoffice = require("./api/routes/Backoffice-New-Api/Web/UpdateCustomerPassword")


const AddCustomerBlogLikeStatus_NewBackoffice = require("./api/routes/Backoffice-New-Api/Web/AddCustomerBlogLikeStatus")
const UpdateLikeCount_NewBackoffice = require("./api/routes/Backoffice-New-Api/Web/UpdateLikeCount")
const GetBlogCustomerLikedStatus_NewBackoffice = require("./api/routes/Backoffice-New-Api/Web/GetBlogCustomerLikedStatus")
const GetBlogComments_NewBackoffice = require("./api/routes/Backoffice-New-Api/Web/GetBlogComments")
const AddBlogComments_NewBackoffice = require("./api/routes/Backoffice-New-Api/Web/AddBlogComments")
const GetBlogTags_NewBackoffice = require("./api/routes/Backoffice-New-Api/Web/GetBlogTags")


const GetFootwearListing_NewBackoffice = require("./api/routes/Backoffice-New-Api/Web/GetFootwearListing")
const GetFootwearBrandData_NewBackoffice = require("./api/routes/Backoffice-New-Api/Web/GetFootwearBrandData")
const GetFoodCategoryWebsiteData_NewBackoffice = require("./api/routes/Backoffice-New-Api/Web/GetFoodCategoryWebsiteData")
const GetFoodListing_NewBackoffice = require("./api/routes/Backoffice-New-Api/Web/GetFoodListing")

const GetSocksListing_NewBackoffice = require("./api/routes/Backoffice-New-Api/Web/GetSocksListing")
const GetSocksBrandData_NewBackoffice = require("./api/routes/Backoffice-New-Api/Web/GetSocksBrandData")

const GetFootwearMasterDetailsWebsite_NewBackoffice = require("./api/routes/Backoffice-New-Api/Web/GetFootwearMasterDetailsWebsite")
const GetFootwearVariantDetailsWebsite_NewBackoffice = require("./api/routes/Backoffice-New-Api/Web/GetFootwearVariantDetailsWebsite")
const GetFootwearGenderListingWebsite_NewBackoffice = require("./api/routes/Backoffice-New-Api/Web/GetFootwearGenderListingWebsite")

const GetSocksMasterDetailsWebsite_NewBackoffice = require("./api/routes/Backoffice-New-Api/Web/GetSocksMasterDetailsWebsite")
const GetSocksVariantDetailsWebsite_NewBackoffice = require("./api/routes/Backoffice-New-Api/Web/GetSocksVariantDetailsWebsite")
const GetSocksGenderListingWebsite_NewBackoffice = require("./api/routes/Backoffice-New-Api/Web/GetSocksGenderListingWebsite")


const GetFilterFootwearListing_NewBackoffice = require("./api/routes/Backoffice-New-Api/Web/GetFilterFootwearListing")

const GetFilterSocksListing_NewBackoffice = require("./api/routes/Backoffice-New-Api/Web/GetFilterSocksListing")
const GetFoodBrandData_NewBackoffice = require("./api/routes/Backoffice-New-Api/Web/GetFoodBrandData")
const GetFoodFlavourDataFilter_NewBackoffice = require("./api/routes/Backoffice-New-Api/Web/GetFoodFlavourDataFilter")
const GetFoodFilterDataFilter_NewBackoffice = require("./api/routes/Backoffice-New-Api/Web/GetFoodFilterDataFilter")
const GetFoodPriceDataFilter_NewBackoffice = require("./api/routes/Backoffice-New-Api/Web/GetFoodPriceDataFilter")

const GetFoodMasterDetailsWebsite_NewBackoffice = require("./api/routes/Backoffice-New-Api/Web/GetFoodMasterDetailsWebsite")
const GetFoodCategoryListingWebsite_NewBackoffice = require("./api/routes/Backoffice-New-Api/Web/GetFoodCategoryListingWebsite")
const GetFoodVariantDetailsWebsite_NewBackoffice = require("./api/routes/Backoffice-New-Api/Web/GetFoodVariantDetailsWebsite")
const GetFilterFoodListing_NewBackoffice = require("./api/routes/Backoffice-New-Api/Web/GetFilterFoodListing")

const AddShoppingCart_NewBackoffice = require("./api/routes/Backoffice-New-Api/Web/AddShoppingCart")

const GetCartFoodVariant_NewBackoffice = require("./api/routes/Backoffice-New-Api/Web/GetCartFoodVariant")
const GetCartSocksVariant_NewBackoffice = require("./api/routes/Backoffice-New-Api/Web/GetCartSocksVariant")
const GetCartFootwearVariant_NewBackoffice = require("./api/routes/Backoffice-New-Api/Web/GetCartFootwearVariant")
const GetCartFoodVariantCookie_NewBackoffice = require("./api/routes/Backoffice-New-Api/Web/GetCartFoodVariantCookie")
const GetCartSocksVariantCookie_NewBackoffice = require("./api/routes/Backoffice-New-Api/Web/GetCartSocksVariantCookie")
const GetCartFootwearVariantCookie_NewBackoffice = require("./api/routes/Backoffice-New-Api/Web/GetCartFootwearVariantCookie")

const DeductShoppingCart_NewBackoffice = require("./api/routes/Backoffice-New-Api/Web/DeductShoppingCart")
const DeleteItemShoppingCart_NewBackoffice = require("./api/routes/Backoffice-New-Api/Web/DeleteItemShoppingCart")

const ClearShoppingCart_NewBackoffice = require("./api/routes/Backoffice-New-Api/Web/ClearShoppingCart")
const GetExtraCharges_NewBackoffice = require("./api/routes/Backoffice-New-Api/Web/GetExtraCharges")
const GetOfferWebsite_NewBackoffice = require("./api/routes/Backoffice-New-Api/Web/GetOfferWebsite")

const GetAddressCustomer_NewBackoffice = require("./api/routes/Backoffice-New-Api/Web/GetAddressCustomer")

const GetNewOrders_NewBackoffice = require("./api/routes/Backoffice-New-Api/Web/GetNewOrders")
const GetOrderDetail_NewBackoffice = require("./api/routes/Backoffice-New-Api/Web/GetOrderDetail")
const GetFoodOrderDetail_NewBackoffice = require("./api/routes/Backoffice-New-Api/GetFoodOrderDetail")
const GetSocksOrderDetail_NewBackoffice = require("./api/routes/Backoffice-New-Api/GetSocksOrderDetail")
const GetFootwearOrderDetail_NewBackoffice = require("./api/routes/Backoffice-New-Api/GetFootwearOrderDetail")

const CustomerOrderMailer_NewBackoffice = require("./api/routes/Backoffice-New-Api/Web/CustomerOrderMailer")
const VendorOrderMailer_NewBackoffice = require("./api/routes/Backoffice-New-Api/Web/VendorOrderMailer")
//-----------------------------------------New API -------------------------------------------------------------

//---------------------------Vendor-------------------------

const AddVendorOrder_NewBackoffice = require("./api/routes/Backoffice-New-Api/AddVendorOrder")
const AddVendorOrderDetail_NewBackoffice = require("./api/routes/Backoffice-New-Api/AddVendorOrderDetail")
const GetVendorById_NewBackoffice = require("./api/routes/Backoffice-New-Api/GetVendorById")


const GetVendorOrderDetail_NewBackoffice = require("./api/routes/Backoffice-New-Api/GetVendorOrderDetail")
const GetVendorFootwearOrderDetail_NewBackoffice = require("./api/routes/Backoffice-New-Api/GetVendorFootwearOrderDetail")
const GetVendorFoodOrderDetail_NewBackoffice = require("./api/routes/Backoffice-New-Api/GetVendorFoodOrderDetail")
const GetVendorSocksOrderDetail_NewBackoffice = require("./api/routes/Backoffice-New-Api/GetVendorSocksOrderDetail")

const AddWishlist_NewBackoffice = require("./api/routes/Backoffice-New-Api/Web/AddWishlist")
const DeleteItemWishlist_NewBackoffice = require("./api/routes/Backoffice-New-Api/Web/DeleteItemWishlist")

const GetWishlistFoodVariant_NewBackoffice = require("./api/routes/Backoffice-New-Api/Web/GetWishlistFoodVariant")
const GetWishlistFootwearVariant_NewBackoffice = require("./api/routes/Backoffice-New-Api/Web/GetWishlistFootwearVariant")
const GetWishlistSocksVariant_NewBackoffice = require("./api/routes/Backoffice-New-Api/Web/GetWishlistSocksVariant")

const GetFootwearSizeDataWebsite_NewBackoffice = require("./api/routes/Backoffice-New-Api/Web/GetFootwearSizeDataWebsite")
const GetFootwearColorDataWebsite_NewBackoffice = require("./api/routes/Backoffice-New-Api/Web/GetFootwearColorDataWebsite")
const GetFootwearTypeDataWebsite_NewBackoffice = require("./api/routes/Backoffice-New-Api/Web/GetFootwearTypeDataWebsite")
const GetFootwearPriceDataFilter_NewBackoffice = require("./api/routes/Backoffice-New-Api/Web/GetFootwearPriceDataFilter")



const GetSocksSizeDataWebsite_NewBackoffice = require("./api/routes/Backoffice-New-Api/Web/GetSocksSizeDataWebsite")
const GetSocksColorDataWebsite_NewBackoffice = require("./api/routes/Backoffice-New-Api/Web/GetSocksColorDataWebsite")
const GetSocksTypeDataWebsite_NewBackoffice = require("./api/routes/Backoffice-New-Api/Web/GetSocksTypeDataWebsite")
const GetSocksPriceDataFilter_NewBackoffice = require("./api/routes/Backoffice-New-Api/Web/GetSocksPriceDataFilter")

const GetFoodHomePageWebsite_NewBackoffice = require("./api/routes/Backoffice-New-Api/Web/GetFoodHomePageWebsite")
const GetFootwearHomePageWebsite_NewBackoffice = require("./api/routes/Backoffice-New-Api/Web/GetFootwearHomePageWebsite")
const GetSocksHomePageWebsite_NewBackoffice = require("./api/routes/Backoffice-New-Api/Web/GetSocksHomePageWebsite")

const AddTransactionLog_NewBackoffice = require("./api/routes/Backoffice-New-Api/Web/AddTransactionLog")
const Response_NewBackoffice = require("./api/routes/Backoffice-New-Api/Web/Response")
const PaymentResponse_NewBackoffice = require("./api/routes/Backoffice-New-Api/Web/PaymentResponse")

const UpdateCustomerPhoto_NewBackoffice = require("./api/routes/Backoffice-New-Api/Web/UpdateCustomerPhoto")

const GetHealthCenterDoctorWeb_NewBackoffice = require("./api/routes/Backoffice-New-Api/Web/GetHealthCenterDoctorWeb")
const GetDoctorHealthCenterWeb_NewBackoffice = require("./api/routes/Backoffice-New-Api/Web/GetDoctorHealthCenterWeb")
const GetHealthCenterNutritionistWeb_NewBackoffice = require("./api/routes/Backoffice-New-Api/Web/GetHealthCenterNutritionistWeb")

const Get_UserFamilyInfoByIDWeb_NewBackoffice = require("./api/routes/Backoffice-New-Api/Web/Get_UserFamilyInfoByID")
const DeleteCustomerAddress_NewBackoffice = require("./api/routes/Backoffice-New-Api/Web/DeleteCustomerAddress")

const UpdateUserAddressMapping_NewBackoffice = require("./api/routes/Backoffice-New-Api/UpdateUserAddressMapping")
const GetOrderHistoryWebsite_NewBackoffice = require("./api/routes/Backoffice-New-Api/Web/GetOrderHistoryWebsite")

const GetNutritionistHealthCenterWeb_NewBackoffice = require("./api/routes/Backoffice-New-Api/Web/GetNutritionistHealthCenterWeb")


const GetFoodVendorDataAssign_NewBackoffice = require("./api/routes/Backoffice-New-Api/GetFoodVendorDataAssign")
const GetFootwearVendorDataAssign_NewBackoffice = require("./api/routes/Backoffice-New-Api/GetFootwearVendorDataAssign")
const GetSocksVendorDataAssign_NewBackoffice = require("./api/routes/Backoffice-New-Api/GetSocksVendorDataAssign")


const GetBlogSearchWebsite_NewBackoffice = require("./api/routes/Backoffice-New-Api/GetBlogSearchWebsite")
const ContactUsMailer_NewBackoffice = require("./api/routes/Backoffice-New-Api/Web/ContactUsMailer")

const GetFoodListingSearchPageWeb_NewBackoffice = require("./api/routes/Backoffice-New-Api/Web/GetFoodListingSearchPageWeb")
const GetCustomerEmailDetails_NewBackoffice = require("./api/routes/Backoffice-New-Api/Web/GetCustomerEmailDetails")
const VerifyEmail_NewBackoffice = require("./api/routes/Backoffice-New-Api/Web/VerifyEmail")
const UpdateOrderConfirmationStatus_NewBackoffice = require("./api/routes/Backoffice-New-Api/Web/UpdateOrderConfirmationStatus")



const Get_TcsMaster_NewBackoffice = require("./api/routes/Backoffice-New-Api/Get_TcsMaster")
const Get_TdsMaster_NewBackoffice = require("./api/routes/Backoffice-New-Api/Get_TdsMaster")
const Update_TdsMaster_NewBackoffice = require("./api/routes/Backoffice-New-Api/Update_TdsMaster")
const Update_TcsMaster_NewBackoffice = require("./api/routes/Backoffice-New-Api/Update_TcsMaster")

const GetSplitOrders_NewBackoffice = require("./api/routes/Backoffice-New-Api/GetSplitOrders")
const GetSettleOrders_NewBackoffice = require("./api/routes/Backoffice-New-Api/GetSettleOrders")

const AddSplitOrders_NewBackoffice = require("./api/routes/Backoffice-New-Api/AddSplitOrders")

const GetSplitOrderDetails_NewBackoffice = require("./api/routes/Backoffice-New-Api/GetSplitOrderDetails")
const AddPaymentRelease_NewBackoffice = require("./api/routes/Backoffice-New-Api/AddPaymentRelease")

const Get_OrderVendorByOrderID_NewBackoffice = require("./api/routes/Backoffice-New-Api/Get_OrderVendorByOrderID")
const Get_OrderVendorDetailByOrderVendorID_NewBackoffice = require("./api/routes/Backoffice-New-Api/Get_OrderVendorDetailByOrderVendorID")
const Get_FoodProductByOrderVendorDetailID_NewBackoffice = require("./api/routes/Backoffice-New-Api/Get_FoodProductByOrderVendorDetailID")
const Get_FootWearProductByOrderVendorDetailID_NewBackoffice = require("./api/routes/Backoffice-New-Api/Get_FootWearProductByOrderVendorDetailID")
const Get_SocksProductByOrderVendorDetailID_NewBackoffice = require("./api/routes/Backoffice-New-Api/Get_SocksProductByOrderVendorDetailID")
const Get_CovidProductByOrderVendorDetailID_NewBackoffice = require("./api/routes/Backoffice-New-Api/Get_CovidProductByOrderVendorDetailID")
const Get_AccessoriesProductByOrderVendorDetailID_NewBackoffice = require("./api/routes/Backoffice-New-Api/Get_AccessoriesProductByOrderVendorDetailID")


const Get_BackOfficeDashboardCount_ByDate_NewBackoffice = require("./api/routes/Backoffice-New-Api/Get_BackOfficeDashboardCount_ByDate")
const Get_BackOfficeDashboardTop5Customer_NewBackoffice = require("./api/routes/Backoffice-New-Api/Get_BackOfficeDashboardTop5Customer")
const Get_BackOfficeDashboardTop5Order_NewBackoffice = require("./api/routes/Backoffice-New-Api/Get_BackOfficeDashboardTop5Order")


const GetSocksMetaData_NewBackoffice = require("./api/routes/Backoffice-New-Api/Web/GetSocksMetaData")
const GetFoodMetaData_NewBackoffice = require("./api/routes/Backoffice-New-Api/Web/GetFoodMetaData")
const GetFootwearMetaData_NewBackoffice = require("./api/routes/Backoffice-New-Api/Web/GetFootwearMetaData")


const Get_ReturnMaster_NewBackoffice = require("./api/routes/Backoffice-New-Api/Get_ReturnMaster")
const GetRefundOrdersForRelease_NewBackoffice = require("./api/routes/Backoffice-New-Api/GetRefundOrdersForRelease")
const UpdateReturnStatus_NewBackoffice = require("./api/routes/Backoffice-New-Api/UpdateReturnStatus")
const GetPaymentSplitFromOrder_NewBackoffice = require("./api/routes/Backoffice-New-Api/GetPaymentSplitFromOrder")
const AddPaymentRefund_NewBackoffice = require("./api/routes/Backoffice-New-Api/AddPaymentRefund")

const GetNewOrderForVerify_NewBackoffice = require("./api/routes/Backoffice-New-Api/GetNewOrderForVerify")
const VerifyOrders_NewBackoffice = require("./api/routes/Backoffice-New-Api/VerifyOrders")

const GetDashboarshMonthWiseOrdersSales_NewBackoffice = require("./api/routes/Backoffice-New-Api/GetDashboarshMonthWiseOrdersSales")
const GetBlogAll_NewBackoffice = require("./api/routes/Backoffice-New-Api/Web/GetBlogAll")

const GetCancelOrders_NewBackoffice = require("./api/routes/Backoffice-New-Api/GetCancelOrders")


const UpdateCODServiceMaster_NewBackoffice = require("./api/routes/Backoffice-New-Api/UpdateCODServiceMaster")
const GetCodMaster_NewBackoffice = require("./api/routes/Backoffice-New-Api/GetCodMaster")

const GetOrderDataReports_NewBackoffice = require("./api/routes/Backoffice-New-Api/GetOrderDataReports")
const GetCustomerDataReports_NewBackoffice = require("./api/routes/Backoffice-New-Api/GetCustomerDataReports")

const GetFoodProductDataReports_NewBackoffice = require("./api/routes/Backoffice-New-Api/GetFoodProductDataReports")
const GetFootwearProductDataReports_NewBackoffice = require("./api/routes/Backoffice-New-Api/GetFootwearProductDataReports")
const GetSocksProductDataReports_NewBackoffice = require("./api/routes/Backoffice-New-Api/GetSocksProductDataReports")

const GetVendorDataReports_NewBackoffice = require("./api/routes/Backoffice-New-Api/GetVendorDataReports")
const GetOrderDetailDataReport_NewBackoffice = require("./api/routes/Backoffice-New-Api/GetOrderDetailDataReport")


const ForgotPasswordStaff_NewBackoffice = require("./api/routes/Backoffice-New-Api/ForgotPasswordStaff")
const ChangePasswordByAdmin_NewBackoffice = require("./api/routes/Backoffice-New-Api/ChangePasswordByAdmin")

const GetSettlementReportOrderDetail_NewBackoffice = require("./api/routes/Backoffice-New-Api/GetSettlementReportOrderDetail")



const GetFestiveOfferHomePageWebsite_NewBackoffice = require("./api/routes/Backoffice-New-Api/GetFestiveOfferHomePageWebsite")
const GetFestiveOfferListing_NewBackoffice = require("./api/routes/Backoffice-New-Api/GetFestiveOfferListing")


const GetFestiveFoodVariantDetails_NewBackoffice = require("./api/routes/Backoffice-New-Api/GetFestiveFoodVariantDetails")
const GetFestiveFootwearVariantDetails_NewBackoffice = require("./api/routes/Backoffice-New-Api/GetFestiveFootwearVariantDetails")
const GetFestiveSocksVariantDetails_NewBackoffice = require("./api/routes/Backoffice-New-Api/GetFestiveSocksVariantDetails")


const GetAllFoodBrandData_NewBackoffice = require("./api/routes/Backoffice-New-Api/GetAllFoodBrandData")
const GetAllFootwearBrandData_NewBackoffice = require("./api/routes/Backoffice-New-Api/GetAllFootwearBrandData")
const GetAllSocksBrandData_NewBackoffice = require("./api/routes/Backoffice-New-Api/GetAllSocksBrandData")


const AddFestiveOfferMaster_NewBackoffice = require("./api/routes/Backoffice-New-Api/AddFestiveOfferMaster")
const AddFestiveOfferProductMapping_NewBackoffice = require("./api/routes/Backoffice-New-Api/AddFestiveOfferProductMapping")
const GetFestiveOfferMaster_NewBackoffice = require("./api/routes/Backoffice-New-Api/GetFestiveOfferMaster")
const UpdateFestiveOfferMaster_NewBackoffice = require("./api/routes/Backoffice-New-Api/UpdateFestiveOfferMaster")

const GetFestiveOfferProductMapping_NewBackoffice = require("./api/routes/Backoffice-New-Api/GetFestiveOfferProductMapping")

const GetFoodItemData_NewBackoffice = require("./api/routes/Backoffice-New-Api/GetFoodItemData")
const GetFootwearItemData_NewBackoffice = require("./api/routes/Backoffice-New-Api/GetFootwearItemData")
const GetSocksItemData_NewBackoffice = require("./api/routes/Backoffice-New-Api/GetSocksItemData")

const AddSmsLog_NewBackoffice = require("./api/routes/Backoffice-New-Api/AddSmsLog")
const GetSmsLog_NewBackoffice = require("./api/routes/Backoffice-New-Api/GetSmsLog")


const AddAdBannerMaster_NewBackoffice = require("./api/routes/Backoffice-New-Api/AddAdBannerMaster")
const UpdateAdBannerImage_NewBackoffice = require("./api/routes/Backoffice-New-Api/UpdateAdBannerImage")

const GetAdBannerMaster_NewBackoffice = require("./api/routes/Backoffice-New-Api/GetAdBannerMaster")
const UpdateAdBannerMaster_NewBackoffice = require("./api/routes/Backoffice-New-Api/UpdateAdBannerMaster")
const Get_AdBannerWebsite_NewBackoffice = require("./api/routes/Backoffice-New-Api/Get_AdBannerWebsite")






const AddAccessoriesItemMaster_NewBackoffice = require("./api/routes/Backoffice-New-Api/AddAccessoriesItemMaster")
const AddAccessoriesVariantImages_NewBackoffice = require("./api/routes/Backoffice-New-Api/AddAccessoriesVariantImages")
const AddAccessoriesVariantVendorPricing_NewBackoffice = require("./api/routes/Backoffice-New-Api/AddAccessoriesVariantVendorPricing")
const AddAccessoriesTypeMaster_NewBackoffice = require("./api/routes/Backoffice-New-Api/AddAccessoriesTypeMaster")
const AddAccessoriesColorMaster_NewBackoffice = require("./api/routes/Backoffice-New-Api/AddAccessoriesColorMaster")
const AddAccessoriesCategoryMaster_NewBackoffice = require("./api/routes/Backoffice-New-Api/AddAccessoriesCategoryMaster")
const AddAccessoriesSizeMaster_NewBackoffice = require("./api/routes/Backoffice-New-Api/AddAccessoriesSizeMaster")
const AddAccessoriesVariant_NewBackoffice = require("./api/routes/Backoffice-New-Api/AddAccessoriesVariant")

const UpdateAccessoriesCategoryMaster_NewBackoffice = require("./api/routes/Backoffice-New-Api/UpdateAccessoriesCategoryMaster")
const UpdateAccessoriesSizeMaster_NewBackoffice = require("./api/routes/Backoffice-New-Api/UpdateAccessoriesSizeMaster")
const UpdateAccessoriesColorMaster_NewBackoffice = require("./api/routes/Backoffice-New-Api/UpdateAccessoriesColorMaster")
const UpdateAccessoriesTypeMaster_NewBackoffice = require("./api/routes/Backoffice-New-Api/UpdateAccessoriesTypeMaster")
const UpdateAccessoriesItemMaster_NewBackoffice = require("./api/routes/Backoffice-New-Api/UpdateAccessoriesItemMaster")
const UpdateAccessoriesItemVariant_NewBackoffice = require("./api/routes/Backoffice-New-Api/UpdateAccessoriesItemVariant")


const DeleteAccessoriesSizeMaster_NewBackoffice = require("./api/routes/Backoffice-New-Api/DeleteAccessoriesSizeMaster")
const DeleteAccessoriesCategoryMaster_NewBackoffice = require("./api/routes/Backoffice-New-Api/DeleteAccessoriesCategoryMaster")
const DeleteAccessoriesColorMaster_NewBackoffice = require("./api/routes/Backoffice-New-Api/DeleteAccessoriesColorMaster")
const DeleteAccessoriesTypeMaster_NewBackoffice = require("./api/routes/Backoffice-New-Api/DeleteAccessoriesTypeMaster")
const DeleteAccessoriesVariantImage_NewBackoffice = require("./api/routes/Backoffice-New-Api/DeleteAccessoriesVariantImage")

const Get_AccessoriesTypeMaster_NewBackoffice = require("./api/routes/Backoffice-New-Api/Get_AccessoriesTypeData")
const Get_AccessoriesCategoryData_NewBackoffice = require("./api/routes/Backoffice-New-Api/Get_AccessoriesCategoryData")
const Get_AccessoriesItemMaster_NewBackoffice = require("./api/routes/Backoffice-New-Api/Get_AccessoriesItemMaster")
const Get_AccessoriesVarientList_NewBackoffice = require("./api/routes/Backoffice-New-Api/Get_AccessoriesVarientList")
const Get_AccessoriesSizeData_NewBackoffice = require("./api/routes/Backoffice-New-Api/Get_AccessoriesSizeData")
const Get_AccessoriesColorData_NewBackoffice = require("./api/routes/Backoffice-New-Api/Get_AccessoriesColorData")
const Get_AccessoriesCategoryList_NewBackoffice = require("./api/routes/Backoffice-New-Api/Get_AccessoriesCategoryList")

const Get_AccessoriesSizeList_NewBackoffice = require("./api/routes/Backoffice-New-Api/Get_AccessoriesSizeList")
const Get_AccessoriesTypeList_NewBackoffice = require("./api/routes/Backoffice-New-Api/Get_AccessoriesTypeList")
const Get_AccessoriesColorList_NewBackoffice = require("./api/routes/Backoffice-New-Api/Get_AccessoriesColorList")


const UpdateAccessoriesItemMasterApprovalStatus_NewBackoffice = require("./api/routes/Backoffice-New-Api/UpdateAccessoriesItemMasterApprovalStatus")
const UpdateAccessoriesVariantApprovalStatus_NewBackoffice = require("./api/routes/Backoffice-New-Api/UpdateAccessoriesVariantApprovalStatus")


const AddCovidSizeMaster_NewBackoffice = require("./api/routes/Backoffice-New-Api/AddCovidSizeMaster")
const UpdateCovidSizeMaster_NewBackoffice = require("./api/routes/Backoffice-New-Api/UpdateCovidSizeMaster")
const GetCovidSizeList_NewBackoffice = require("./api/routes/Backoffice-New-Api/GetCovidSizeList")
const DeleteCovidSizeMaster_NewBackoffice = require("./api/routes/Backoffice-New-Api/DeleteCovidSizeMaster")
const GetCovidSizeData_NewBackoffice = require("./api/routes/Backoffice-New-Api/GetCovidSizeData")

const GetCovidMasterDetailsWebsite_NewBackoffice = require("./api/routes/Backoffice-New-Api/Web/GetCovidMasterDetailsWebsite")
const GetCovidCategoryListingWebsite_NewBackoffice = require("./api/routes/Backoffice-New-Api/Web/GetCovidCategoryListingWebsite")
const GetCovidVariantDetailsWebsite_NewBackoffice = require("./api/routes/Backoffice-New-Api/Web/GetCovidVariantDetailsWebsite")


const GetCovidBrandData_NewBackoffice = require("./api/routes/Backoffice-New-Api/Web/GetCovidBrandData")
const GetCovidListing_NewBackoffice = require("./api/routes/Backoffice-New-Api/Web/GetCovidListing")
const GetCovidFilterDataFilter_NewBackoffice = require("./api/routes/Backoffice-New-Api/Web/GetCovidFilterDataFilter")
const GetCovidCategoryWebsiteData_NewBackoffice = require("./api/routes/Backoffice-New-Api/Web/GetCovidCategoryWebsiteData")
const GetCovidHomePageWebsite_NewBackoffice = require("./api/routes/Backoffice-New-Api/Web/GetCovidHomePageWebsite")

const DeleteCovidVariantImage_NewBackoffice = require("./api/routes/Backoffice-New-Api/DeleteCovidVariantImage")
const DeleteCovidCategoryMaster_NewBackoffice = require("./api/routes/Backoffice-New-Api/DeleteCovidCategoryMaster")
const DeleteCovidColorMaster_NewBackoffice = require("./api/routes/Backoffice-New-Api/DeleteCovidColorMaster")
const DeleteCovidFilterMaster_NewBackoffice = require("./api/routes/Backoffice-New-Api/DeleteCovidFilterMaster")


const AddCovidEssentials_NewBackoffice = require("./api/routes/Backoffice-New-Api/AddCovidEssentials")
const AddCovidCategoryMaster_NewBackoffice = require("./api/routes/Backoffice-New-Api/AddCovidCategoryMaster")
const AddCovidFilterMaster_NewBackoffice = require("./api/routes/Backoffice-New-Api/AddCovidFilterMaster")
const AddCovidVariantImage_NewBackoffice = require("./api/routes/Backoffice-New-Api/AddCovidVariantImage")
const AddCovidItemMaster_FilterMapping_NewBackoffice = require("./api/routes/Backoffice-New-Api/AddCovidItemMaster_FilterMapping")
const AddCovidColorMaster_NewBackoffice = require("./api/routes/Backoffice-New-Api/AddCovidColorMaster")
const AddCovidVariantVendorPricing_NewBackoffice = require("./api/routes/Backoffice-New-Api/AddCovidVariantVendorPricing")
const AddCovidVariant_NewBackoffice = require("./api/routes/Backoffice-New-Api/AddCovidVariant")


const GetCovidCategoryData_NewBackoffice = require("./api/routes/Backoffice-New-Api/GetCovidCategoryData")
const GetCovidFilterData_NewBackoffice = require("./api/routes/Backoffice-New-Api/GetCovidFilterData")
const GetCovidItemMaster_NewBackoffice = require("./api/routes/Backoffice-New-Api/GetCovidItemMaster")
const GetCovidVariantList_NewBackoffice = require("./api/routes/Backoffice-New-Api/GetCovidVariantList")
const GetCovidColorData_NewBackoffice = require("./api/routes/Backoffice-New-Api/GetCovidColorData")
const GetCovidColorList_NewBackoffice = require("./api/routes/Backoffice-New-Api/GetCovidColorList")
const GetCovidCategoryMasterList_NewBackoffice = require("./api/routes/Backoffice-New-Api/GetCovidCategoryMasterList")
const GetCovidFilterList_NewBackoffice = require("./api/routes/Backoffice-New-Api/GetCovidFilterList")
const GetCartCovidVariant_NewBackoffice = require("./api/routes/Backoffice-New-Api/Web/GetCartCovidVariant")
const GetCartCovidVariantCookie_NewBackoffice = require("./api/routes/Backoffice-New-Api/Web/GetCartCovidVariantCookie")
const GetCovidListingSearchPageWeb_NewBackoffice = require("./api/routes/Backoffice-New-Api/Web/GetCovidListingSearchPageWeb")


const UpdateCovidItemMaster_NewBackoffice = require("./api/routes/Backoffice-New-Api/UpdateCovidItemMaster")
const UpdateCovidVariant_NewBackoffice = require("./api/routes/Backoffice-New-Api/UpdateCovidVariant")
const UpdateCovidFilterMaster_NewBackoffice = require("./api/routes/Backoffice-New-Api/UpdateCovidFilterMaster")
const UpdateCovidColorMaster_NewBackoffice = require("./api/routes/Backoffice-New-Api/UpdateCovidColorMaster")
const UpdateCovidCategoryMaster_NewBackoffice = require("./api/routes/Backoffice-New-Api/UpdateCovidCategoryMaster")
const UpdateCovidItemMasterApprovalStatus_NewBackoffice = require("./api/routes/Backoffice-New-Api/UpdateCovidItemMasterApprovalStatus")
const UpdateCovidVariantApprovalStatus_NewBackoffice = require("./api/routes/Backoffice-New-Api/UpdateCovidVariantApprovalStatus")




const GetAccessoriesCategoryWebsiteData_NewBackoffice = require("./api/routes/Backoffice-New-Api/Web/GetAccessoriesCategoryWebsiteData")
const GetAccessoriesHomePageWebsite_NewBackoffice = require("./api/routes/Backoffice-New-Api/Web/GetAccessoriesHomePageWebsite")
const GetAccessoriesListing_NewBackoffice = require("./api/routes/Backoffice-New-Api/Web/GetAccessoriesListing")
const GetAccessoriesTypeDataWebsite_NewBackoffice = require("./api/routes/Backoffice-New-Api/Web/GetAccessoriesTypeDataWebsite")
const GetAccessoriesColorDataWebsite_NewBackoffice = require("./api/routes/Backoffice-New-Api/Web/GetAccessoriesColorDataWebsite")
const GetAccessoriesBrandData_NewBackoffice = require("./api/routes/Backoffice-New-Api/Web/GetAccessoriesBrandData")
const GetAccessoriesSizeDataWebsite_NewBackoffice = require("./api/routes/Backoffice-New-Api/Web/GetAccessoriesSizeDataWebsite")
const GetFilterAccessoriesListing_NewBackoffice = require("./api/routes/Backoffice-New-Api/Web/GetFilterAccessoriesListing")
const GetAccessoriesMasterDetailsWebsite_NewBackoffice = require("./api/routes/Backoffice-New-Api/Web/GetAccessoriesMasterDetailsWebsite")
const GetAccessoriesGenderListingWebsite_NewBackoffice = require("./api/routes/Backoffice-New-Api/Web/GetAccessoriesGenderListingWebsite")
const GetAccessoriesVariantDetailsWebsite_NewBackoffice = require("./api/routes/Backoffice-New-Api/Web/GetAccessoriesVariantDetailsWebsite")


const InsuranceMailer_NewBackoffice = require("./api/routes/Backoffice-New-Api/Web/InsuranceMailer")

const GetCartAccessoriesVariant_NewBackoffice = require("./api/routes/Backoffice-New-Api/Web/GetCartAccessoriesVariant")
const GetCartAccessoriesVariantCookie_NewBackoffice = require("./api/routes/Backoffice-New-Api/Web/GetCartAccessoriesVariantCookie")
const GetAccessoriesListingSearchPageWeb_NewBackoffice = require("./api/routes/Backoffice-New-Api/Web/GetAccessoriesListingSearchPageWeb")

const GetCovidOrderDetail_NewBackoffice = require("./api/routes/Backoffice-New-Api/GetCovidOrderDetail")
const GetAccessoriesOrderDetail_NewBackoffice = require("./api/routes/Backoffice-New-Api/GetAccessoriesOrderDetail")

const GetAccessoriesVendorDataAssign_NewBackoffice = require("./api/routes/Backoffice-New-Api/GetAccessoriesVendorDataAssign")
const GetCovidVendorDataAssign_NewBackoffice = require("./api/routes/Backoffice-New-Api/GetCovidVendorDataAssign")
const GetVendorCovidOrderDetail_NewBackoffice = require("./api/routes/Backoffice-New-Api/GetVendorCovidOrderDetail")
const GetVendorAccessoriesOrderDetail_NewBackoffice = require("./api/routes/Backoffice-New-Api/GetVendorAccessoriesOrderDetail")
const GetIfEmailVerified_NewBackoffice = require("./api/routes/Backoffice-New-Api/Web/GetIfEmailVerified")

const app = express();
app.use(bodyParser.json({limit: '50MB', extended: true}));
app.use(bodyParser.urlencoded({limit: '50MB', extended: true }));
app.use(cors());
app.use(multipart({
    maxFieldsSize: '50MB'
}));

var session = require('express-session');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({secret: 'mcg001k',saveUninitialized: true,resave: true}));
app.use(express.static(__dirname + '/'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.set('views', __dirname);




app.use("/AddProductCategory", AddProductCategory);
app.use("/AddDosageForm", AddDosageForm);
app.use("/AddPackagingSize", AddPackagingSize);
app.use("/AddPackagingType", AddPackagingType);
app.use("/UpdateProductCategory", UpdateProductCategory);
app.use("/UpdateDosageForm", UpdateDosageForm);
app.use("/UpdatePackagingSize", UpdatePackagingSize);
app.use("/UpdatePackagingType", UpdatePackagingType);
app.use("/UsernameAuth", UsernameAuth);
app.use("/AddStaff", AddStaff);
app.use("/UpdateStaff", UpdateStaff);
app.use("/GetStaff", GetStaff);
app.use("/GetCountry", GetCountry);
app.use("/GetState", GetState);
app.use("/GetCity", GetCity);
app.use("/GetProductCategory", GetProductCategory);
app.use("/GetDosageForm", GetDosageForm);
app.use("/GetPackagingSize", GetPackagingSize);
app.use("/GetPackagingType", GetPackagingType);
app.use("/UpdatePasswordDetails", UpdatePasswordDetails);
app.use("/DeleteProductCategory", DeleteProductCategory);
app.use("/DeleteDosageForm", DeleteDosageForm);
app.use("/DeletePackagingSize", DeletePackagingSize);
app.use("/DeletePackagingType", DeletePackagingType);
app.use("/AddFaq", AddFaq);
app.use("/GetFaq", GetFaq);AddPharmaCompany
app.use("/DeleteFaq", DeleteFaq);
app.use("/UpdateFaq", UpdateFaq);
app.use("/AddPharmaCompany", AddPharmaCompany);
app.use("/GetBrand", GetBrand);
app.use("/AddBrand", AddBrand);
app.use("/UpdateBrand", UpdateBrand);
app.use("/GetPharmaCompany", GetPharmaCompany);
app.use("/UpdatePharmaCompany", UpdatePharmaCompany);
app.use("/AddLoginSession", AddLoginSession);
app.use("/AddLoginDetails", AddLoginDetails);
app.use("/AddDoctorQualification", AddDoctorQualification);
app.use("/AddNutritionist", AddNutritionist);
app.use("/AddNutritionistQualification", AddNutritionistQualification);
app.use("/AddYogaTrainer", AddYogaTrainer);
app.use("/AddYogaTrainerQualification", AddYogaTrainerQualification);
app.use("/AddHealthCareCenter", AddHealthCareCenter);
app.use("/AddDiagnosticCenter", AddDiagnosticCenter);
app.use("/AddDoctor", AddDoctor);
app.use("/GetDoctor", GetDoctor);
app.use("/GetNutritionist", GetNutritionist);
app.use("/GetYogaTrainer", GetYogaTrainer);
app.use("/GetHealthCenter", GetHealthCenter);
app.use("/GetDiagnosticCenter", GetDiagnosticCenter);
app.use("/GetDoctorQualification", GetDoctorQualification);
app.use("/UpdateDoctor", UpdateDoctor);
app.use("/GetNutritionistQualification", GetNutritionistQualification);
app.use("/UpdateNutritionist", UpdateNutritionist);
app.use("/GetYogaQualification", GetYogaQualification);
app.use("/UpdateYogaTrainer", UpdateYogaTrainer);
app.use("/UpdateHealthCenter", UpdateHealthCenter);
app.use("/UpdateDiagnosticCenter", UpdateDiagnosticCenter);
app.use("/GetDiagnosticCenterBranch", GetDiagnosticCenterBranch);
app.use("/AddDiagnosticCenterBranch",AddDiagnosticCenterBranch);
app.use("/UpdateDiagnosticCenterBranch",UpdateDiagnosticCenterBranch);
app.use("/GetBlogCategory",GetBlogCategory);
app.use("/GetBlogSubCategory",GetBlogSubCategory);
app.use("/AddBlog",AddBlog);
app.use("/GetBlog",GetBlog);
app.use("/UpdateBlog",UpdateBlog);
app.use("/DeleteBlog",DeleteBlog);
app.use("/RegisterCustomer",RegisterCustomer);
app.use("/AddUserLoginSession",AddUserLoginSession);
app.use("/CustomerLoginAuth",CustomerLoginAuth);
app.use("/AddBlogComments",AddBlogComments);
app.use("/GetBlogComments",GetBlogComments);
app.use("/GetBlogCommentsToApprove",GetBlogCommentsToApprove);
app.use("/ApproveBlogComment",ApproveBlogComment);
app.use("/DeleteBlogComment",DeleteBlogComment);
app.use("/GetRegisteredCustomer",GetRegisteredCustomer);
app.use("/AddCustomerBlogLikeStatus",AddCustomerBlogLikeStatus);
app.use("/UpdateLikeCount",UpdateLikeCount);
app.use("/GetBlogCustomerLikedStatus",GetBlogCustomerLikedStatus);
app.use("/GetMarketer",GetMarketer);
app.use("/GetHealthCenterNutritionistMapping",GetHealthCenterNutritionistMapping);
app.use("/AddHealthCenterNutritionistMapping",AddHealthCenterNutritionistMapping);
app.use("/UpdateHealthCenterNutritionistMapping",UpdateHealthCenterNutritionistMapping);

app.use("/AddDevice",AddDevice);
app.use("/GetDevice",GetDevice);
app.use("/UpdateDevice",UpdateDevice);
app.use("/AddDeviceImageMapping",AddDeviceImageMapping);
app.use("/GetDeviceImage",GetDeviceImage);
app.use("/AddDeviceVendorMapping",AddDeviceVendorMapping);
app.use("/GetDeviceVendorMapping",GetDeviceVendorMapping);

app.use("/AddBook",AddBook);
app.use("/GetBooks",GetBooks);
app.use("/UpdateBook",UpdateBook);
app.use("/AddBookImageMapping",AddBookImageMapping);
app.use("/GetBookImage",GetBookImage);
app.use("/AddBookVendorMapping",AddBookVendorMapping);
app.use("/GetBookVendorMapping",GetBookVendorMapping);

app.use("/AddAllopathyMedicine",AddAllopathyMedicine);
app.use("/GetAllopathyMedicine",GetAllopathyMedicine);
app.use("/AddAllopathyImageMapping",AddAllopathyImageMapping);
app.use("/UpdateAllopathicMedicine",UpdateAllopathicMedicine);
app.use("/GetMedicineAllopathyImage",GetMedicineAllopathyImage);
app.use("/AddAllopathyVendorMapping",AddAllopathyVendorMapping);
app.use("/GetAllopathyVendorMapping",GetAllopathyVendorMapping);

app.use("/AddAyurvedicMedicine",AddAyurvedicMedicine);
app.use("/GetAyurvedicMedicine",GetAyurvedicMedicine);
app.use("/AddAyurvedicImageMapping",AddAyurvedicImageMapping);
app.use("/GetMedicineAyuvedicImage",GetMedicineAyuvedicMapping);
app.use("/UpdateAyurvedicMedicine",UpdateAyurvedicMedicine);
app.use("/GetMedicineAyuvedicImage",GetMedicineAyuvedicImage);
app.use("/AddAyurvedicVendorMapping",AddAyurvedicVendorMapping);
app.use("/GetAyurvedicVendorMapping",GetAyurvedicVendorMapping);

app.use("/AddFootCare",AddFootCare);
app.use("/GetFootCare",GetFootCare);
app.use("/AddFootCareImageMapping",AddFootCareImageMapping);
app.use("/AddFootCareSizeMapping",AddFootCareSizeMapping);
app.use("/GetFootCareImage",GetFootCareImage);
app.use("/UpdateFootCare",UpdateFootCare);
app.use("/GetFootCareSizeMapping",GetFootCareSizeMapping);
app.use("/AddFootcareVendorMapping",AddFootcareVendorMapping);
app.use("/GetFootcareVendorMapping",GetFootcareVendorMapping);

app.use("/AddVendor",AddVendor);
app.use("/AddVendorContactPerson",AddVendorContactPerson);
app.use("/GetVendor",GetVendor);
app.use("/UpdateVendor",UpdateVendor);
app.use("/GetVendorContactPerson",GetVendorContactPerson);
app.use("/UpdateVendorContactPerson",UpdateVendorContactPerson);

app.use("/AddOffer",AddOffer);
app.use("/UpdateOffer",UpdateOffer);
app.use("/GetOffer",GetOffer);

app.use("/AddDiagnosticTest",AddDiagnosticTest);
app.use("/UpdateDiagnosticTest",UpdateDiagnosticTest);
app.use("/GetDiagnosticTest",GetDiagnosticTest);
app.use("/AddDiagnosticTestFaqMapping",AddDiagnosticTestFaqMapping);
app.use("/GetDaignosticTestFaqMapping",GetDaignosticTestFaqMapping);

app.use("/GetHealthCenterDoctoMapping",GetHealthCenterDoctoMapping);
app.use("/AddHealthCenterDoctorMapping",AddHealthCenterDoctorMapping);
app.use("/UpdateHealthCenterDoctorMapping",UpdateHealthCenterDoctorMapping);

app.use("/AddFood",AddFood);
app.use("/AddFoodImageMapping",AddFoodImageMapping);
app.use("/GetFood",GetFood);
app.use("/GetFoodImage",GetFoodImage);
app.use("/UpdateFood",UpdateFood);
app.use("/AddFoodVendorMapping",AddFoodVendorMapping);
app.use("/GetFoodVendorMapping",GetFoodVendorMapping);

app.use("/GetBlogBackend",GetBlogBackend);

app.use("/AddImage", AddImage);
app.use("/AddPdf", AddPdf);

app.use("/UrlToBase64", UrlToBase64);


app.use("/AddSaltMaster",AddSaltMaster);
app.use("/GetSaltMaster",GetSaltMaster);
app.use("/UpdateSaltMaster",UpdateSaltMaster);
app.use("/DeleteSaltMaster",DeleteSaltMaster);
app.use("/AddContributor",AddContributor);
app.use("/UpdateContributor",UpdateContributor);
app.use("/GetContributor",GetContributor);
app.use("/GetHealthCenterContactPerson",GetHealthCenterContactPerson);
app.use("/AddHealthCenterContactPerson",AddHealthCenterContactPerson);
app.use("/UpdateHealthCenterContactPerson",UpdateHealthCenterContactPerson);
app.use("/AddOrder",AddOrder);
app.use("/AddOrderDetail",AddOrderDetail);
app.use("/GetNewOrders",GetNewOrders);
app.use("/GetOrderDetailData",GetOrderDetailData);
app.use("/AddOrderVendor",AddOrderVendor);
app.use("/GetVendorOrder",GetVendorOrder);
app.use("/UpdateShoppingCart",UpdateShoppingCart);
app.use("/DeleteShoppingCart",DeleteShoppingCart);
app.use("/DeleteShoppingCartItem",DeleteShoppingCartItem);
app.use("/AddWishlist",AddWishlist);
app.use("/GetWishlistData",GetWishlistData);
app.use("/DeleteWishlist",DeleteWishlist);
app.use("/DeleteWishlistItem",DeleteWishlistItem);
app.use("/UpdateWishlist",UpdateWishlist);
app.use("/CustomerOrderMailer",CustomerOrderMailer);


// ---------------------Web-----------------------

app.use("/GetDoctorWeb", GetDoctorWeb);
app.use("/GetBooksWeb", GetBooksWeb);
app.use("/GetFootCareWeb", GetFootCareWeb);
app.use("/GetDevicesWeb", GetDevicesWeb);
app.use("/GetAllopathicMedicineWeb", GetAllopathicMedicineWeb);
app.use("/GetAyurvedicMedicineWeb", GetAyurvedicMedicineWeb);
app.use("/GetNutritionistWeb", GetNutritionistWeb);
app.use("/GetBlogDetails", GetBlogDetails);
app.use("/GetDoctorDetailsWeb", GetDoctorDetailsWeb);
app.use("/GetDoctorHealthCenterWeb", GetDoctorHealthCenterWeb);
app.use("/GetLabWeb", GetLabWeb);

app.use("/GetNutritionistDetailsWeb", GetNutritionistDetailsWeb);
app.use("/GetNutritionistHealthCenterWeb", GetNutritionistHealthCenterWeb);
app.use("/GetLabDetailsWeb", GetLabDetailsWeb);
app.use("/GetLabBranchesWeb", GetLabBranchesWeb);
app.use("/GetBookDetailsWebsite", GetBookDetailsWebsite);
app.use("/GetFootDetailsWebsite", GetFootDetailsWebsite);
app.use("/GetShoppingCartData", GetShoppingCartData);
app.use("/GetDeviceDetailsWebsite", GetDeviceDetailsWebsite);
app.use("/GetAllopathyDetailsWebsite", GetAllopathyDetailsWebsite);
app.use("/GetAyuvedicDetailsWebsite", GetAyuvedicDetailsWebsite);
app.use("/GetFoodDetailsWebsite", GetFoodDetailsWebsite);
app.use("/GetFoodWeb", GetFoodWeb)
app.use("/GetHealthCenterDoctorWeb", GetHealthCenterDoctorWeb);
app.use("/GetHealthCenterNutritionistWeb", GetHealthCenterNutritionistWeb);


app.use("/AddShoppingCart", AddShoppingCart);
app.use("/AddShippingAddressCustomer", AddShippingAddressCustomer);
app.use("/GetShippingAddressCustomer", GetShippingAddressCustomer);
app.use("/AddCustomerPrescription", AddCustomerPrescription);


app.use("/GetBlogNine", GetBlogNine);
app.use("/GetNutritionistWebSix", GetNutritionistWebSix);
app.use("/GetDoctorWebSix", GetDoctorWebSix);
app.use("/GetBlogCategoryWebsite", GetBlogCategoryWebsite);
app.use("/GetBlogWithCategoryWebsite", GetBlogWithCategoryWebsite);
app.use("/GetEmailExistsCustomer", GetEmailExistsCustomer);
app.use("/GetSocialPosts", GetSocialPosts);

app.use("/GetDevicesWebNine", GetDevicesWebNine);
app.use("/GetFootCareWebNine", GetFootCareWebNine);
app.use("/GetBooksWebNine", GetBooksWebNine);

//-----------------------Web--------------



//-----------------------Mailers--------------
app.use("/CustomerRegistraionMailer", CustomerRegistraionMailer);
app.use("/VerifyMailMailer", VerifyMailMailer);
app.use("/IfEmailExists", IfEmailExists);
app.use("/ForgotPasswordMailer", ForgotPasswordMailer);
app.use("/UpdateCustomerPassword", UpdateCustomerPassword);
app.use("/GetBlogTags", GetBlogTags);
app.use("/ContactUsMailer",ContactUsMailer);

//-----------------------Mailers--------------

app.use("/TestDeleteImage",TestDeleteImage);
app.use("/VerifyMobileOTP",VerifyMobileOTP);
app.use("/CustomerRegistraionMobileOTP",CustomerRegistraionMobileOTP);







//-----------------------------------------New API -------------------------------------------------------------



app.use("/BackofficeApi/IfMobileExists",IfMobileExists_NewBackoffice);
app.use("/BackofficeApi/CustomerAuthMobile",CustomerAuthMobile_NewBackoffice);
app.use("/BackofficeApi/VerifyEmail",VerifyEmail_NewBackoffice);








app.use("/BackofficeApi/Add_ReturnMaster",Add_ReturnMaster_NewBackoffice);

app.use("/BackofficeApi/AuthenticateStaff",AuthenticateStaff_NewBackoffice);
app.use("/BackofficeApi/AddStaffLoginSession",AddStaffLoginSession_NewBackoffice);


app.use("/BackofficeApi/AddCompanyMaster",AddCompanyMaster_NewBackoffice);
app.use("/BackofficeApi/GetCompanyList",GetCompanyList_NewBackoffice);
app.use("/BackofficeApi/DeleteCompanyMaster",DeleteCompanyMaster_NewBackoffice);
app.use("/BackofficeApi/UpdateCompanyLogo",UpdateCompanyLogo_NewBackoffice);
app.use("/BackofficeApi/UpdateCompanyMaster",UpdateCompanyMaster_NewBackoffice);

app.use("/BackofficeApi/AddBrandMaster",AddBrandMaster_NewBackoffice)
app.use("/BackofficeApi/GetBrandList",GetBrandList_NewBackoffice);
app.use("/BackofficeApi/DeleteBrandMaster",DeleteBrandMaster_NewBackoffice);
app.use("/BackofficeApi/UpdateBrandLogo",UpdateBrandLogo_NewBackoffice);
app.use("/BackofficeApi/UpdateBrandMaster",UpdateBrandMaster_NewBackoffice);

app.use("/BackofficeApi/AddFoodCategoryMaster",AddFoodCategoryMaster_NewBackoffice);
app.use("/BackofficeApi/GetFoodCategoryList",GetFoodCategoryList_NewBackoffice);
app.use("/BackofficeApi/DeleteFoodCategoryMaster",DeleteFoodCategoryMaster_NewBackoffice);
app.use("/BackofficeApi/UpdateFoodCategoryMaster",UpdateFoodCategoryMaster_NewBackoffice);

app.use("/BackofficeApi/AddFootwearTypeMaster",AddFootwearTypeMaster_NewBackoffice);
app.use("/BackofficeApi/GetFootwareTypeList",GetFootwareTypeList_NewBackoffice);
app.use("/BackofficeApi/DeleteFootwareTypeMaster",DeleteFootwareTypeMaster_NewBackoffice);
app.use("/BackofficeApi/UpdateFootwearTypeMaster",UpdateFootwearTypeMaster_NewBackoffice);

app.use("/BackofficeApi/AddFoodFilterMaster",AddFoodFilterMaster_NewBackoffice)
app.use("/BackofficeApi/GetFoodFilterList",GetFoodFilterList_NewBackoffice);
app.use("/BackofficeApi/DeleteFoodFilterMaster",DeleteFoodFilterMaster_NewBackoffice);
app.use("/BackofficeApi/UpdateFoodFilterMaster",UpdateFoodFilterMaster_NewBackoffice);


app.use("/BackofficeApi/AddBookLanguageMaster",AddBookLanguageMaster_NewBackoffice);
app.use("/BackofficeApi/GetBookLanguageList",GetBookLanguageList_NewBackoffice);
app.use("/BackofficeApi/DeleteBookLanguageMaster",DeleteBookLanguageMaster_NewBackoffice);
app.use("/BackofficeApi/UpdateBookLanguageMaster",UpdateBookLanguageMaster_NewBackoffice);

app.use("/BackofficeApi/AddBookCategoryMaster",AddBookCategoryMaster_NewBackoffice);
app.use("/BackofficeApi/GetBookCategoryList",GetBookCategoryList_NewBackoffice);
app.use("/BackofficeApi/DeleteBookCategoryMaster",DeleteBookCategoryMaster_NewBackoffice);
app.use("/BackofficeApi/UpdateBookCategoryMaster",UpdateBookCategoryMaster_NewBackoffice);

app.use("/BackofficeApi/AddDeviceCategoryMaster",AddDeviceCategoryMaster_NewBackoffice);
app.use("/BackofficeApi/GetDeviceCategoryList",GetDeviceCategoryList_NewBackoffice);
app.use("/BackofficeApi/DeleteDeviceCategoryMaster",DeleteDeviceCategoryMaster_NewBackoffice);
app.use("/BackofficeApi/UpdateDeviceCategoryMaster",UpdateDeviceCategoryMaster_NewBackoffice);

app.use("/BackofficeApi/AddDeviceFilterMaster",AddDeviceFilterMaster_NewBackoffice);
app.use("/BackofficeApi/GetDeviceFilter",GetDeviceFilter_NewBackoffice);
app.use("/BackofficeApi/DeleteDeviceFilterMaster",DeleteDeviceFilterMaster_NewBackoffice);
app.use("/BackofficeApi/UpdateDeviceFilterMaster",UpdateDeviceFilterMaster_NewBackoffice);

app.use("/BackofficeApi/AddFootwearColorMaster",AddFootwearColorMaster_NewBackoffice);
app.use("/BackofficeApi/GetFootwareColorList",GetFootwareColorList_NewBackoffice);
app.use("/BackofficeApi/DeleteFootwareColorMaster",DeleteFootwareColorMaster_NewBackoffice);
app.use("/BackofficeApi/UpdateFootwearColorMaster",UpdateFootwearColorMaster_NewBackoffice);

app.use("/BackofficeApi/AddFootwearSizeMaster",AddFootwearSizeMaster_NewBackoffice);
app.use("/BackofficeApi/GetFootwareSizeList",GetFootwareSizeList_NewBackoffice);
app.use("/BackofficeApi/DeleteFootwareSizeMaster",DeleteFootwareSizeMaster_NewBackoffice);
app.use("/BackofficeApi/UpdateFootwearSizeMaster",UpdateFootwearSizeMaster_NewBackoffice);

app.use("/BackofficeApi/AddSocksSizeMaster",AddSocksSizeMaster_NewBackoffice);
app.use("/BackofficeApi/GetSocksSizeList",GetSocksSizeList_NewBackoffice);
app.use("/BackofficeApi/DeleteSocksSizeMaster",DeleteSocksSizeMaster_NewBackoffice);
app.use("/BackofficeApi/UpdateSocksSizeMaster",UpdateSocksSizeMaster_NewBackoffice);

app.use("/BackofficeApi/AddSaltMaster",AddSaltMaster_NewBackoffice);
app.use("/BackofficeApi/GetSaltList",GetSaltList_NewBackoffice);
app.use("/BackofficeApi/DeleteSaltMaster",DeleteSaltMaster_NewBackoffice);
app.use("/BackofficeApi/UpdateSaltMaster",UpdateSaltMaster_NewBackoffice);

app.use("/BackofficeApi/AddPackagingTypeMaster",AddPackagingTypeMaster_NewBackoffice);
app.use("/BackofficeApi/GetPackagingTypeList",GetPackagingTypeList_NewBackoffice);
app.use("/BackofficeApi/DeletePackagingTypeMaster",DeletePackagingTypeMaster_NewBackoffice);
app.use("/BackofficeApi/UpdatePackagingTypeMaster",UpdatePackagingTypeMaster_NewBackoffice);

app.use("/BackofficeApi/AddDosageFormMaster",AddDosageFormMaster_NewBackoffice);
app.use("/BackofficeApi/GetDosageFormList",GetDosageFormList_NewBackoffice);
app.use("/BackofficeApi/DeleteDosageFormMaster",DeleteDosageFormMaster_NewBackoffice);
app.use("/BackofficeApi/UpdateDosageFormMaster",UpdateDosageFormMaster_NewBackoffice);

app.use("/BackofficeApi/AddMedicineCategoryMaster",AddMedicineCategoryMaster_NewBackoffice);
app.use("/BackofficeApi/GetMedicineCategoryList",GetMedicineCategoryList_NewBackoffice);
app.use("/BackofficeApi/DeleteMedicineCategoryMaster",DeleteMedicineCategoryMaster_NewBackoffice);

app.use("/BackofficeApi/AddTagMaster",AddTagMaster_NewBackoffice);
app.use("/BackofficeApi/GetTagMasterList",GetTagMasterList_NewBackoffice);
app.use("/BackofficeApi/DeleteTagMaster",DeleteTagMaster_NewBackoffice);
app.use("/BackofficeApi/UpdateTagMaster",UpdateTagMaster_NewBackoffice);

app.use("/BackofficeApi/AddArticleCategoryMaster",AddArticleCategoryMaster_NewBackoffice);
app.use("/BackofficeApi/GetArticleCategoryMasterList",GetArticleCategoryMasterList_NewBackoffice);
app.use("/BackofficeApi/DeleteArticleCategoryMaster",DeleteArticleCategoryMaster_NewBackoffice);
app.use("/BackofficeApi/UpdateArticleCategoryMaster",UpdateArticleCategoryMaster_NewBackoffice);

app.use("/BackofficeApi/AddArticleSubCategoryMaster",AddArticleSubCategoryMaster_NewBackoffice);
app.use("/BackofficeApi/GetArticleSubCategoryMasterList",GetArticleSubCategoryMasterList_NewBackoffice);
app.use("/BackofficeApi/DeleteArticleSubCategoryMaster",DeleteArticleSubCategoryMaster_NewBackoffice);
app.use("/BackofficeApi/UpdateArticleSubCategoryMaster",UpdateArticleSubCategoryMaster_NewBackoffice);


app.use("/BackofficeApi/AddFlavourMaster",AddFlavourMaster_NewBackoffice);
app.use("/BackofficeApi/GetFlavourMaster",GetFlavourMaster_NewBackoffice);
app.use("/BackofficeApi/DeleteFlavourMaster",DeleteFlavourMaster_NewBackoffice);
app.use("/BackofficeApi/UpdateFlavourMaster",UpdateFlavourMaster_NewBackoffice);



app.use("/BackofficeApi/GetCompany",GetCompany_NewBackoffice);
app.use("/BackofficeApi/GetDepartment",GetDepartment_NewBackoffice);
app.use("/BackofficeApi/GetDesignation",GetDesignation_NewBackoffice);
app.use("/BackofficeApi/GetUserType",GetUserType_NewBackoffice);
app.use("/BackofficeApi/GetCountry",GetCountry_NewBackoffice);
app.use("/BackofficeApi/GetState",GetState_NewBackoffice);
app.use("/BackofficeApi/GetCity",GetCity_NewBackoffice);


app.use("/BackofficeApi/ChangePassword",ChangePassword_NewBackoffice);
app.use("/BackofficeApi/GetStaff",GetStaff_NewBackoffice);

app.use("/BackofficeApi/AddStaff",AddStaff_NewBackoffice);
app.use("/BackofficeApi/UpdateStaff",UpdateStaff_NewBackoffice);

app.use("/BackofficeApi/AddContributor",AddContributor_NewBackoffice);
app.use("/BackofficeApi/UpdateContributor",UpdateContributor_NewBackoffice);
app.use("/BackofficeApi/GetContributors",GetContributors_NewBackoffice);
app.use("/BackofficeApi/UpdateContributorPhoto",UpdateContributorPhoto_NewBackoffice);
app.use("/BackofficeApi/GetArticleCategory",GetArticleCategory_NewBackoffice);
app.use("/BackofficeApi/GetArticleSubCategory",GetArticleSubCategory_NewBackoffice);
app.use("/BackofficeApi/GetArticleTags",GetArticleTags_NewBackoffice);
app.use("/BackofficeApi/GetBlogContributors",GetBlogContributors_NewBackoffice);

app.use("/BackofficeApi/AddArticle",AddArticle_NewBackoffice);
app.use("/BackofficeApi/GetArticleList",GetArticleList_NewBackoffice);
app.use("/BackofficeApi/AddArticleTagMapping",AddArticleTagMapping_NewBackoffice);

app.use("/BackofficeApi/UpdateArticlePreviewPhoto",UpdateArticlePreviewPhoto_NewBackoffice);
app.use("/BackofficeApi/UpdateArticleCoverPhoto",UpdateArticleCoverPhoto_NewBackoffice);


app.use("/BackofficeApi/GetQualification",GetQualification_NewBackoffice);
app.use("/BackofficeApi/GetSpecialisation",GetSpecialisation_NewBackoffice);

app.use("/BackofficeApi/AddDoctor",AddDoctor_NewBackoffice);
app.use("/BackofficeApi/AddDoctorQualificationMapping",AddDoctorQualificationMapping_NewBackoffice);
app.use("/BackofficeApi/AddDoctorSpecialisationMapping",AddDoctorSpecialisationMapping_NewBackoffice);
app.use("/BackofficeApi/AddDoctorCertificateMapping",AddDoctorCertificateMapping_NewBackoffice);

app.use("/BackofficeApi/UpdateDoctorPhoto",UpdateDoctorPhoto_NewBackoffice);
app.use("/BackofficeApi/UpdateDoctorConsent",UpdateDoctorConsent_NewBackoffice);
app.use("/BackofficeApi/UpdateDoctorPdf",UpdateDoctorPdf_NewBackoffice);


app.use("/BackofficeApi/AddDietitian",AddDietitian_NewBackoffice);
app.use("/BackofficeApi/AddDietitianQualificationMapping",AddDietitianQualificationMapping_NewBackoffice);
app.use("/BackofficeApi/AddDietitianCertificateMapping",AddDietitianCertificateMapping_NewBackoffice);

app.use("/BackofficeApi/UpdateDietitianPhoto",UpdateDietitianPhoto_NewBackoffice);
app.use("/BackofficeApi/UpdateDietitianConsent",UpdateDietitianConsent_NewBackoffice);
app.use("/BackofficeApi/UpdateDietitianPdf",UpdateDietitianPdf_NewBackoffice);

app.use("/BackofficeApi/GetHealthCenterFacilities",GetHealthCenterFacilities_NewBackoffice);
app.use("/BackofficeApi/GetHealthCenterServices",GetHealthCenterServices_NewBackoffice);


app.use("/BackofficeApi/AddHealthCenter",AddHealthCenter_NewBackoffice);
app.use("/BackofficeApi/AddHealthCenterServicesMapping",AddHealthCenterServicesMapping_NewBackoffice);
app.use("/BackofficeApi/AddHealthCenterFacilitiesMappings",AddHealthCenterFacilitiesMapping_NewBackoffice);
app.use("/BackofficeApi/AddHealthCenterTimingsMapping",AddHealthCenterTimingsMapping_NewBackoffice);
app.use("/BackofficeApi/UpdateStaffPhoto",UpdateStaffPhoto_NewBackoffice);

app.use("/BackofficeApi/UpdateArticle",UpdateArticle_NewBackoffice);

app.use("/BackofficeApi/GetDoctorList",GetDoctorList_NewBackoffice);
app.use("/BackofficeApi/UpdateDoctor",UpdateDoctor_NewBackoffice);
app.use("/BackofficeApi/DeleteDoctorCertificate",DeleteDoctorCertificate_NewBackoffice);
app.use("/BackofficeApi/GetHealthCenterList",GetHealthCenterList_NewBackoffice);

app.use("/BackofficeApi/UpdateHealthCenter",UpdateHealthCenter_NewBackoffice);
app.use("/BackofficeApi/GetDietitianList",GetDietitianList_NewBackoffice);

app.use("/BackofficeApi/UpdateDietitian",UpdateDietitian_NewBackoffice);
app.use("/BackofficeApi/DeleteDietitianCertificate",DeleteDietitianCertificate_NewBackoffice);

app.use("/BackofficeApi/AddFoodItemMaster_FilterMapping",AddFoodItemMaster_FilterMapping_NewBackoffice);
app.use("/BackofficeApi/GetFoodItemMaster",GetFoodItemMaster_NewBackoffice);
app.use("/BackofficeApi/GetBookItemMaster",GetBookItemMaster_NewBackoffice);



app.use("/BackofficeApi/GetBrandData",GetBrandData_NewBackoffice);
app.use("/BackofficeApi/GetFoodCategoryData",GetFoodCategoryData_NewBackoffice);
app.use("/BackofficeApi/GetFoodFilterData",GetFoodFilterData_NewBackoffice);
app.use("/BackofficeApi/GetFoodFlavourData",GetFoodFlavourData_NewBackoffice);
app.use("/BackofficeApi/GetGstData",GetGstData_NewBackoffice);
app.use("/BackofficeApi/GetBookCategoryData",GetBookCategoryData_NewBackoffice);


app.use("/BackofficeApi/AddFootwearItemMaster",AddFootwearItemMaster_NewBackoffice);
app.use("/BackofficeApi/GetFootwearItemMaster",GetFootwearItemMaster_NewBackoffice);
app.use("/BackofficeApi/GetFootwearTypeMaster",GetFootwearTypeMaster_NewBackoffice);
app.use("/BackofficeApi/UpdateFootwearItemMaster",UpdateFootwearItemMaster_NewBackoffice);


app.use("/BackofficeApi/AddSocksItemMaster",AddSocksItemMaster_NewBackoffice);
app.use("/BackofficeApi/GetSocksItemMaster",GetSocksItemMaster_NewBackoffice);
app.use("/BackofficeApi/UpdateSocksItemMaster",UpdateSocksItemMaster_NewBackoffice);

app.use("/BackofficeApi/GetPackagingTypeData",GetPackagingTypeData_NewBackoffice);
app.use("/BackofficeApi/GetHealthCenterData",GetHealthCenterData_NewBackoffice);

app.use("/BackofficeApi/AddHealthCenterDietitianMapping",AddHealthCenterDietitianMapping_NewBackoffice);
app.use("/BackofficeApi/AddHealthCenterDoctorMapping",AddHealthCenterDoctorMapping_NewBackoffice);
app.use("/BackofficeApi/DeleteHealthCenterDietitianMapping",DeleteHealthCenterDietitianMapping_NewBackoffice);
app.use("/BackofficeApi/DeleteHealthCenterDoctorMapping",DeleteHealthCenterDoctorMapping_NewBackoffice);

app.use("/BackofficeApi/AddSocksTypeMaster",AddSocksTypeMaster_NewBackoffice);
app.use("/BackofficeApi/GetSocksTypeMaster",GetSocksTypeMaster_NewBackoffice);
app.use("/BackofficeApi/GetSocksTypeMasterGrid",GetSocksTypeMasterGrid_NewBackoffice);
app.use("/BackofficeApi/DeleteSocksTypeMaster",DeleteSocksTypeMaster_NewBackoffice);
app.use("/BackofficeApi/UpdateSocksTypeMaster",UpdateSocksTypeMaster_NewBackoffice);

app.use("/BackofficeApi/GetHealthCenterDietitianMappingList",GetHealthCenterDietitianMappingList_NewBackoffice);
app.use("/BackofficeApi/GetHealthCenterDoctorMappingList",GetHealthCenterDoctorMappingList_NewBackoffice);

app.use("/BackofficeApi/AddHealthCenterFacilitiesMaster",AddHealthCenterFacilitiesMaster_NewBackoffice);
app.use("/BackofficeApi/GetHealthCenterFacilitiesMaster",GetHealthCenterFacilitiesMaster_NewBackoffice);
app.use("/BackofficeApi/DeleteHealthCenterFacilitiesMaster",DeleteHealthCenterFacilitiesMaster_NewBackoffice);
app.use("/BackofficeApi/UpdateHealthCenterFacilitiesMaster",UpdateHealthCenterFacilitiesMaster_NewBackoffice);


app.use("/BackofficeApi/AddHealthCenterServicesMaster",AddHealthCenterServicesMaster_NewBackoffice);
app.use("/BackofficeApi/GetHealthCenterServicesMaster",GetHealthCenterServicesMaster_NewBackoffice);
app.use("/BackofficeApi/DeleteHealthCenterServicesMaster",DeleteHealthCenterServicesMaster_NewBackoffice);
app.use("/BackofficeApi/UpdateHealthCenterServicesMaster",UpdateHealthCenterServicesMaster_NewBackoffice);


app.use("/BackofficeApi/GetCareerByID",GetCareerByID_NewBackoffice);
app.use("/BackofficeApi/GetCareer",GetCareer_NewBackoffice);
app.use("/BackofficeApi/GetCareerWebsite",GetCareerWebsite_NewBackoffice);

app.use("/BackofficeApi/AddCareer",AddCareer_NewBackoffice);
app.use("/BackofficeApi/UpdateCareer",UpdateCareer_NewBackoffice);


app.use("/BackofficeApi/AddVendor",AddVendor_NewBackoffice);
app.use("/BackofficeApi/UpdateVendorLogo",UpdateVendorLogo_NewBackoffice);
app.use("/BackofficeApi/AddVendorFacilitiesMapping",AddVendorFacilitiesMapping_NewBackoffice);
app.use("/BackofficeApi/AddVendorLicenseMapping",AddVendorLicenseMapping_NewBackoffice);
app.use("/BackofficeApi/AddVendorAccreditationmapping",AddVendorAccreditationmapping_NewBackoffice);
app.use("/BackofficeApi/UpdateVendorCheque",UpdateVendorCheque_NewBackoffice);
app.use("/BackofficeApi/AddVendorTimingMapping",AddVendorTimingMapping_NewBackoffice);
app.use("/BackofficeApi/AddVendorContactPersonMapping",AddVendorContactPersonMapping_NewBackoffice);
app.use("/BackofficeApi/GetVendorList",GetVendorList_NewBackoffice);


app.use("/BackofficeApi/GetFootwearColorData",GetFootwearColorData_NewBackoffice);
app.use("/BackofficeApi/GetFootwearSizeData",GetFootwearSizeData_NewBackoffice);

app.use("/BackofficeApi/GetSocksSizeData",GetSocksSizeData_NewBackoffice);
app.use("/BackofficeApi/GetSocksColorData",GetSocksColorData_NewBackoffice);


app.use("/BackofficeApi/AddFootwearVariant",AddFootwearVariant_NewBackoffice);
app.use("/BackofficeApi/AddFootwearVariantImage",AddFootwearVariantImage_NewBackoffice);
app.use("/BackofficeApi/AddFootwearVariantVendorPricing",AddFootwearVariantVendorPricing_NewBackoffice);
app.use("/BackofficeApi/GetFootwearVariantList",GetFootwearVariantList_NewBackoffice);

app.use("/BackofficeApi/AddSocksVariant",AddSocksVariant_NewBackoffice);
app.use("/BackofficeApi/AddSocksVariantImage",AddSocksVariantImage_NewBackoffice);
app.use("/BackofficeApi/AddSocksVariantVendorPricing",AddSocksVariantVendorPricing_NewBackoffice);
app.use("/BackofficeApi/GetSocksVariantList",GetSocksVariantList_NewBackoffice);

app.use("/BackofficeApi/GetVendorFacilitiesData",GetVendorFacilitiesData_NewBackoffice);
app.use("/BackofficeApi/GetVendorLicenseData",GetVendorLicenseData_NewBackoffice);
app.use("/BackofficeApi/GetVendorAccreditationData",GetVendorAccreditationData_NewBackoffice);


app.use("/BackofficeApi/AddSocksColorMaster",AddSocksColorMaster_NewBackoffice);
app.use("/BackofficeApi/GetSocksColorMasterList",GetSocksColorMasterList_NewBackoffice);
app.use("/BackofficeApi/DeleteSocksColorMaster",DeleteSocksColorMaster_NewBackoffice);
app.use("/BackofficeApi/UpdateSocksColorMaster",UpdateSocksColorMaster_NewBackoffice);

app.use("/BackofficeApi/UpdateVendor",UpdateVendor_NewBackoffice);
app.use("/BackofficeApi/AddVendorLicenseMaster",AddVendorLicenseMaster_NewBackoffice);
app.use("/BackofficeApi/GetVendorLicenseMasterList",GetVendorLicenseMasterList_NewBackoffice);
app.use("/BackofficeApi/DeleteVendorLicenseMaster",DeleteVendorLicenseMaster_NewBackoffice);
app.use("/BackofficeApi/UpdateVendorLicenseMaster",UpdateVendorLicenseMaster_NewBackoffice);


app.use("/BackofficeApi/AddAccreditationMaster",AddAccreditationMaster_NewBackoffice);
app.use("/BackofficeApi/GetAccreditationMasterList",GetAccreditationMasterList_NewBackoffice);
app.use("/BackofficeApi/DeleteAccreditationMaster",DeleteAccreditationMaster_NewBackoffice);
app.use("/BackofficeApi/UpdateAccreditationMaster",UpdateAccreditationMaster_NewBackoffice);
app.use("/BackofficeApi/UpdateAccreditationMasterLogo",UpdateAccreditationMasterLogo_NewBackoffice);


app.use("/BackofficeApi/AddVendorFacilityMaster",AddVendorFacilityMaster_NewBackoffice);
app.use("/BackofficeApi/GetVendorFacilitiesMasterList",GetVendorFacilitiesMasterList_NewBackoffice);
app.use("/BackofficeApi/DeleteVendorFacilityMaster",DeleteVendorFacilityMaster_NewBackoffice);
app.use("/BackofficeApi/UpdateVendorFacilitiesMaster",UpdateVendorFacilitiesMaster_NewBackoffice);

app.use("/BackofficeApi/AddQualificationMaster",AddQualificationMaster_NewBackoffice);
app.use("/BackofficeApi/GetQualificationMasterList",GetQualificationMasterList_NewBackoffice);
app.use("/BackofficeApi/DeleteQualificationMaster",DeleteQualificationMaster_NewBackoffice);
app.use("/BackofficeApi/UpdateQualificationMaster",UpdateQualificationMaster_NewBackoffice);

app.use("/BackofficeApi/AddSpecializationMaster",AddSpecializationMaster_NewBackoffice);
app.use("/BackofficeApi/GetSpecializationMasterList",GetSpecializationMasterList_NewBackoffice);
app.use("/BackofficeApi/DeleteSpecializationMaster",DeleteSpecializationMaster_NewBackoffice);
app.use("/BackofficeApi/UpdateSpecializationMaster",UpdateSpecializationMaster_NewBackoffice);

app.use("/BackofficeApi/DeleteFoodVariantImage",DeleteFoodVariantImage_NewBackoffice);
app.use("/BackofficeApi/UpdateFoodVariant",UpdateFoodVariant_NewBackoffice);


app.use("/BackofficeApi/DeleteBookVariantImage",DeleteBookVariantImage_NewBackoffice);
app.use("/BackofficeApi/UpdateBookVariant",UpdateBookVariant_NewBackoffice);


app.use("/BackofficeApi/DeleteFootwearVariantImage",DeleteFootwearVariantImage_NewBackoffice);
app.use("/BackofficeApi/UpdateFootwearVariant",UpdateFootwearVariant_NewBackoffice);

app.use("/BackofficeApi/DeleteSocksVariantImage",DeleteSocksVariantImage_NewBackoffice);
app.use("/BackofficeApi/UpdateSocksVariant",UpdateSocksVariant_NewBackoffice);


app.use("/BackofficeApi/GetUserMenu",GetUserMenu_NewBackoffice);
app.use("/BackofficeApi/GetUserSubMenu",GetUserSubMenu_NewBackoffice);

app.use("/BackofficeApi/GetMenuList",GetMenuList_NewBackoffice);
app.use("/BackofficeApi/GetSubMenuList",GetSubMenuList_NewBackoffice);

app.use("/BackofficeApi/AddUserMenu",AddUserMenu_NewBackoffice);
app.use("/BackofficeApi/AddUserSubMenu",AddUserSubMenu_NewBackoffice);

app.use("/BackofficeApi/GetUserSubMenuAccessRights",GetUserSubMenuAccessRights_NewBackoffice);


app.use("/BackofficeApi/GetUserMenuList",GetUserMenuList_NewBackoffice);
app.use("/BackofficeApi/GetUserSubMenuList",GetUserSubMenuList_NewBackoffice)

app.use("/BackofficeApi/UpdateMenuRights",UpdateMenuRights_NewBackoffice);
app.use("/BackofficeApi/UpdateSubMenuRights",UpdateSubMenuRights_NewBackoffice)
app.use("/BackofficeApi/UpdateDoctorApprovalStatus",UpdateDoctorApprovalStatus_NewBackoffice);
app.use("/BackofficeApi/UpdateDietitianApprovalStatus",UpdateDietitianApprovalStatus_NewBackoffice);
app.use("/BackofficeApi/UpdateHealthCenterApprovalStatus",UpdateHealthCenterApprovalStatus_NewBackoffice);
app.use("/BackofficeApi/UpdateVendorApprovalStatus",UpdateVendorApprovalStatus_NewBackoffice);
app.use("/BackofficeApi/UpdateFoodItemMasterApprovalStatus",UpdateFoodItemMasterApprovalStatus_NewBackoffice);
app.use("/BackofficeApi/UpdateFootwearItemMasterApprovalStatus",UpdateFootwearItemMasterApprovalStatus_NewBackoffice);
app.use("/BackofficeApi/UpdateBooksItemMasterApprovalStatus",UpdateBooksItemMasterApprovalStatus_NewBackoffice);
app.use("/BackofficeApi/UpdateSocksItemMasterApprovalStatus",UpdateSocksItemMasterApprovalStatus_NewBackoffice)
app.use("/BackofficeApi/UpdateFoodVariantApprovalStatus",UpdateFoodVariantApprovalStatus_NewBackoffice);
app.use("/BackofficeApi/UpdateFootwearVariantApprovalStatus",UpdateFootwearVariantApprovalStatus_NewBackoffice);
app.use("/BackofficeApi/UpdateBookVariantApprovalStatus",UpdateBookVariantApprovalStatus_NewBackoffice);
app.use("/BackofficeApi/UpdateSocksVariantApprovalStatus",UpdateSocksVariantApprovalStatus_NewBackoffice)

app.use("/BackofficeApi/GetUserInfoData",GetUserInfoData_NewBackoffice)


app.use("/BackofficeApi/AddOffer",AddOffer_NewBackoffice)
app.use("/BackofficeApi/GetOffer",GetOffer_NewBackoffice)
app.use("/BackofficeApi/UpdateOffer",UpdateOffer_NewBackoffice)


app.use("/BackofficeApi/AddUserAddressMapping",AddUserAddressMapping_NewBackoffice)
app.use("/BackofficeApi/GetUserAddressMapping",GetUserAddressMapping_NewBackoffice)
app.use("/BackofficeApi/DeleteUserAddressMapping",DeleteUserAddressMapping_NewBackoffice)




app.use("/BackofficeApi/GetVendorOrderById",GetVendorOrderById_NewBackoffice)



app.use("/BackofficeApi/GetOrderVendor",GetOrderVendor_NewBackoffice)


app.use("/BackofficeApi/AddSellWithUs",AddSellWithUs_NewBackoffice)
app.use("/BackofficeApi/GetSellWithUs",GetSellWithUs_NewBackoffice)
app.use("/BackofficeApi/AddInsurance",AddInsurance_NewBackoffice)
app.use("/BackofficeApi/GetInsurance",GetInsurance_NewBackoffice)



app.use("/BackofficeApi/AddUserFamilyInfoMapping",AddUserFamilyInfoMapping_NewBackoffice)
app.use("/BackofficeApi/UpdateUserInfoBasic",UpdateUserInfoBasic_NewBackoffice)
app.use("/BackofficeApi/UpdateUserDiabeticProfile",UpdateUserDiabeticProfile_NewBackoffice)
app.use("/BackofficeApi/GetUserInfoByID",GetUserInfoByID_NewBackoffice)
app.use("/BackofficeApi/DeleteUserFamilyInfoMapping",DeleteUserFamilyInfoMapping_NewBackoffice)

app.use("/BackofficeApi/Updateblogpublish",Updateblogpublish_NewBackoffice)

//-------------------------Web----------------------------------------------

app.use("/BackofficeApi/AddFoodItemMaster",AddFoodItemMaster_NewBackoffice);
app.use("/BackofficeApi/UpdateFoodItemMaster",UpdateFoodItemMaster_NewBackoffice);
app.use("/BackofficeApi/AddBookItemMaster",AddBookItemMaster_NewBackoffice);
app.use("/BackofficeApi/UpdateBookItemMaster",UpdateBookItemMaster_NewBackoffice);


app.use("/BackofficeApi/AddFoodVariant",AddFoodVariant_NewBackoffice);
app.use("/BackofficeApi/AddFoodVariantImage",AddFoodVariantImage_NewBackoffice);
app.use("/BackofficeApi/AddFoodVariantVendorPricing",AddFoodVariantVendorPricing_NewBackoffice);
app.use("/BackofficeApi/GetVendorData",GetVendorData_NewBackoffice);
app.use("/BackofficeApi/GetFoodVariantList",GetFoodVariantList_NewBackoffice);

app.use("/BackofficeApi/GetBookTypeData",GetBookTypeData_NewBackoffice);
app.use("/BackofficeApi/GetBookLanguageData",GetBookLanguageData_NewBackoffice);

app.use("/BackofficeApi/AddBookVariant",AddBookVariant_NewBackoffice);
app.use("/BackofficeApi/AddBookVariantImage",AddBookVariantImage_NewBackoffice);
app.use("/BackofficeApi/AddBookVariantVendorPricing",AddBookVariantVendorPricing_NewBackoffice);

app.use("/BackofficeApi/GetBookVariantList",GetBookVariantList_NewBackoffice);
app.use("/BackofficeApi/AddOrder",AddOrder_NewBackoffice);
app.use("/BackofficeApi/AddOrderDetail",AddOrderDetail_NewBackoffice);

app.use("/BackofficeApi/GetSplitOrders",GetSplitOrders_NewBackoffice);
app.use("/BackofficeApi/GetSettleOrders",GetSettleOrders_NewBackoffice);
app.use("/BackofficeApi/GetSplitOrderDetails",GetSplitOrderDetails_NewBackoffice);
app.use("/BackofficeApi/AddPaymentRelease",AddPaymentRelease_NewBackoffice);

//-------------------------Web----------------------------------------------
app.use("/BackofficeApi/GetBlogNine",GetBlogNine_NewBackoffice);
app.use("/BackofficeApi/GetDoctorWebSix",GetDoctorWebSix_NewBackoffice);
app.use("/BackofficeApi/GetNutritionistWebSix",GetNutritionistWebSix_NewBackoffice);
app.use("/BackofficeApi/GetDoctorWeb",GetDoctorWeb_NewBackoffice);
app.use("/BackofficeApi/GetNutritionistWeb",GetNutritionistWeb_NewBackoffice);
app.use("/BackofficeApi/GetDoctorDetailsWeb",GetDoctorDetailsWeb_NewBackoffice);
app.use("/BackofficeApi/GetSocialPosts",GetSocialPosts_NewBackoffice);
app.use("/BackofficeApi/GetNutritionistDetailsWeb",GetNutritionistDetailsWeb_NewBackoffice);
app.use("/BackofficeApi/GetBlogCategoryWebsite",GetBlogCategoryWebsite_NewBackoffice);
app.use("/BackofficeApi/GetBlogDetails",GetBlogDetails_NewBackoffice);
app.use("/BackofficeApi/GetBlogWithCategoryWebsite",GetBlogWithCategoryWebsite_NewBackoffice);
app.use("/BackofficeApi/GetContributorDetailsWebsite",GetContributorDetailsWebsite_NewBackoffice);
app.use("/BackofficeApi/GetContributorsWebsite",GetContributorsWebsite_NewBackoffice);
app.use("/BackofficeApi/IfEmailExists",IfEmailExists_NewBackoffice);
app.use("/BackofficeApi/VerifyMailMailer",VerifyMailMailer_NewBackoffice);
app.use("/BackofficeApi/VerifyMobileOTP",VerifyMobileOTP_NewBackoffice);
app.use("/BackofficeApi/RegisterCustomer",RegisterCustomer_NewBackoffice);
app.use("/BackofficeApi/CustomerRegistrationMailer",CustomerRegistrationMailer_NewBackoffice);
app.use("/BackofficeApi/CustomerRegistrationMobileOTP",CustomerRegistrationMobileOTP_NewBackoffice);
app.use("/BackofficeApi/AddUserLoginSession",AddUserLoginSession_NewBackoffice);
app.use("/BackofficeApi/ForgotPasswordMailer",ForgotPasswordMailer_NewBackoffice);
app.use("/BackofficeApi/UpdateCustomerPassword",UpdateCustomerPassword_NewBackoffice);
app.use("/BackofficeApi/CustomerLoginAuth",CustomerLoginAuth_NewBackoffice);
app.use("/BackofficeApi/AddCustomerBlogLikeStatus",AddCustomerBlogLikeStatus_NewBackoffice);
app.use("/BackofficeApi/UpdateLikeCount",UpdateLikeCount_NewBackoffice);
app.use("/BackofficeApi/AddCustomerBlogLikedStatus",AddCustomerBlogLikeStatus_NewBackoffice);
app.use("/BackofficeApi/GetBlogCustomerLikedStatus",GetBlogCustomerLikedStatus_NewBackoffice);
app.use("/BackofficeApi/GetBlogComments",GetBlogComments_NewBackoffice);
app.use("/BackofficeApi/AddBlogComments",AddBlogComments_NewBackoffice);
app.use("/BackofficeApi/GetBlogTags",GetBlogTags_NewBackoffice);


app.use("/BackofficeApi/GetFootwearListing",GetFootwearListing_NewBackoffice);
app.use("/BackofficeApi/GetFootwearBrandData",GetFootwearBrandData_NewBackoffice);
app.use("/BackofficeApi/GetFoodCategoryWebsiteData",GetFoodCategoryWebsiteData_NewBackoffice);
app.use("/BackofficeApi/GetFoodListing",GetFoodListing_NewBackoffice);

app.use("/BackofficeApi/GetSocksListing",GetSocksListing_NewBackoffice);
app.use("/BackofficeApi/GetSocksBrandData",GetSocksBrandData_NewBackoffice);

app.use("/BackofficeApi/GetFootwearMasterDetailsWebsite",GetFootwearMasterDetailsWebsite_NewBackoffice);
app.use("/BackofficeApi/GetFootwearVariantDetailsWebsite",GetFootwearVariantDetailsWebsite_NewBackoffice);
app.use("/BackofficeApi/GetFootwearGenderListingWebsite",GetFootwearGenderListingWebsite_NewBackoffice);

app.use("/BackofficeApi/GetSocksMasterDetailsWebsite",GetSocksMasterDetailsWebsite_NewBackoffice);
app.use("/BackofficeApi/GetSocksVariantDetailsWebsite",GetSocksVariantDetailsWebsite_NewBackoffice);
app.use("/BackofficeApi/GetSocksGenderListingWebsite",GetSocksGenderListingWebsite_NewBackoffice);

app.use("/BackofficeApi/GetFilterFootwearListing",GetFilterFootwearListing_NewBackoffice);
app.use("/BackofficeApi/GetFilterSocksListing",GetFilterSocksListing_NewBackoffice);
app.use("/BackofficeApi/GetFoodBrandData",GetFoodBrandData_NewBackoffice);
app.use("/BackofficeApi/GetFoodFlavourDataFilter",GetFoodFlavourDataFilter_NewBackoffice);
app.use("/BackofficeApi/GetFoodFilterDataFilter",GetFoodFilterDataFilter_NewBackoffice);
app.use("/BackofficeApi/GetFoodPriceDataFilter",GetFoodPriceDataFilter_NewBackoffice);

app.use("/BackofficeApi/GetFoodMasterDetailsWebsite",GetFoodMasterDetailsWebsite_NewBackoffice);
app.use("/BackofficeApi/GetFoodCategoryListingWebsite",GetFoodCategoryListingWebsite_NewBackoffice);
app.use("/BackofficeApi/GetFoodVariantDetailsWebsite",GetFoodVariantDetailsWebsite_NewBackoffice);
app.use("/BackofficeApi/GetFilterFoodListing",GetFilterFoodListing_NewBackoffice);


app.use("/BackofficeApi/AddShoppingCart",AddShoppingCart_NewBackoffice);

app.use("/BackofficeApi/GetCartFoodVariant",GetCartFoodVariant_NewBackoffice);
app.use("/BackofficeApi/GetCartFootwearVariant",GetCartFootwearVariant_NewBackoffice);
app.use("/BackofficeApi/GetCartSocksVariant",GetCartSocksVariant_NewBackoffice);
app.use("/BackofficeApi/GetCartFoodVariantCookie",GetCartFoodVariantCookie_NewBackoffice);
app.use("/BackofficeApi/GetCartFootwearVariantCookie",GetCartFootwearVariantCookie_NewBackoffice);
app.use("/BackofficeApi/GetCartSocksVariantCookie",GetCartSocksVariantCookie_NewBackoffice);

app.use("/BackofficeApi/DeductShoppingCart",DeductShoppingCart_NewBackoffice);
app.use("/BackofficeApi/DeleteItemShoppingCart",DeleteItemShoppingCart_NewBackoffice);

app.use("/BackofficeApi/ClearShoppingCart",ClearShoppingCart_NewBackoffice);
app.use("/BackofficeApi/GetExtraCharges",GetExtraCharges_NewBackoffice);
app.use("/BackofficeApi/GetOfferWebsite",GetOfferWebsite_NewBackoffice);

app.use("/BackofficeApi/GetAddressCustomer",GetAddressCustomer_NewBackoffice);
app.use("/BackofficeApi/GetNewOrders",GetNewOrders_NewBackoffice);
app.use("/BackofficeApi/GetOrderDetail",GetOrderDetail_NewBackoffice);

app.use("/BackofficeApi/GetFoodOrderDetail",GetFoodOrderDetail_NewBackoffice);
app.use("/BackofficeApi/GetSocksOrderDetail",GetSocksOrderDetail_NewBackoffice);
app.use("/BackofficeApi/GetFootwearOrderDetail",GetFootwearOrderDetail_NewBackoffice);


app.use("/BackofficeApi/Get_OrderVendorByOrderID",Get_OrderVendorByOrderID_NewBackoffice);
app.use("/BackofficeApi/Get_OrderVendorDetailByOrderVendorID_NewBackoffice",Get_OrderVendorDetailByOrderVendorID_NewBackoffice);


app.use("/BackofficeApi/Get_FoodProductByOrderVendorDetailID_NewBackoffice",Get_FoodProductByOrderVendorDetailID_NewBackoffice);
app.use("/BackofficeApi/Get_FootWearProductByOrderVendorDetailID_NewBackoffice",Get_FootWearProductByOrderVendorDetailID_NewBackoffice);
app.use("/BackofficeApi/Get_SocksProductByOrderVendorDetailID_NewBackoffice",Get_SocksProductByOrderVendorDetailID_NewBackoffice);
app.use("/BackofficeApi/Get_CovidProductByOrderVendorDetailID_NewBackoffice",Get_CovidProductByOrderVendorDetailID_NewBackoffice);
app.use("/BackofficeApi/Get_AccessoriesProductByOrderVendorDetailID_NewBackoffice",Get_AccessoriesProductByOrderVendorDetailID_NewBackoffice);

app.use("/BackofficeApi/Get_BackOfficeDashboardCount_ByDate_NewBackoffice",Get_BackOfficeDashboardCount_ByDate_NewBackoffice);
app.use("/BackofficeApi/Get_BackOfficeDashboardTop5Customer_NewBackoffice",Get_BackOfficeDashboardTop5Customer_NewBackoffice);
app.use("/BackofficeApi/Get_BackOfficeDashboardTop5Order_NewBackoffice",Get_BackOfficeDashboardTop5Order_NewBackoffice);


//-----------------------------------------New API -------------------------------------------------------------

app.use("/BackofficeApi/GetHealthCenterDoctorMapping",GetHealthCenterDoctorMapping_NewBackoffice);
app.use("/BackofficeApi/GetHealthCenterDietitianMapping",GetHealthCenterDietitianMapping_NewBackoffice);
app.use("/BackofficeApi/IfEmailExistsSocial",IfEmailExistsSocial_NewBackoffice);



//-----------------------Vendor-----------------------
app.use("/BackofficeApi/VendorAuth",VendorAuth_NewBackoffice);
app.use("/BackofficeApi/ChangeVendorPassword",ChangeVendorPassword_NewBackoffice);
app.use("/BackofficeApi/AddVendorOrder",AddVendorOrder_NewBackoffice);
app.use("/BackofficeApi/AddVendorOrderDetail",AddVendorOrderDetail_NewBackoffice);
app.use("/BackofficeApi/GetVendorById",GetVendorById_NewBackoffice);

app.use("/BackofficeApi/CustomerOrderMailer",CustomerOrderMailer_NewBackoffice);
app.use("/BackofficeApi/VendorOrderMailer",VendorOrderMailer_NewBackoffice);


app.use("/BackofficeApi/GetVendorOrderDetail",GetVendorOrderDetail_NewBackoffice);
app.use("/BackofficeApi/GetVendorFoodOrderDetail",GetVendorFoodOrderDetail_NewBackoffice);
app.use("/BackofficeApi/GetVendorFootwearOrderDetail",GetVendorFootwearOrderDetail_NewBackoffice);
app.use("/BackofficeApi/GetVendorSocksOrderDetail",GetVendorSocksOrderDetail_NewBackoffice);

app.use("/BackofficeApi/AddWishlist",AddWishlist_NewBackoffice);
app.use("/BackofficeApi/DeleteItemWishlist",DeleteItemWishlist_NewBackoffice);

app.use("/BackofficeApi/GetWishlistFoodVariant",GetWishlistFoodVariant_NewBackoffice);
app.use("/BackofficeApi/GetWishlistFootwearVariant",GetWishlistFootwearVariant_NewBackoffice);
app.use("/BackofficeApi/GetWishlistSocksVariant",GetWishlistSocksVariant_NewBackoffice);

app.use("/BackofficeApi/GetFootwearSizeDataWebsite",GetFootwearSizeDataWebsite_NewBackoffice);
app.use("/BackofficeApi/GetFootwearColorDataWebsite",GetFootwearColorDataWebsite_NewBackoffice);
app.use("/BackofficeApi/GetFootwearTypeDataWebsite",GetFootwearTypeDataWebsite_NewBackoffice);
app.use("/BackofficeApi/GetFootwearPriceDataFilter",GetFootwearPriceDataFilter_NewBackoffice);

app.use("/BackofficeApi/GetSocksSizeDataWebsite",GetSocksSizeDataWebsite_NewBackoffice);
app.use("/BackofficeApi/GetSocksColorDataWebsite",GetSocksColorDataWebsite_NewBackoffice);
app.use("/BackofficeApi/GetSocksTypeDataWebsite",GetSocksTypeDataWebsite_NewBackoffice);
app.use("/BackofficeApi/GetSocksPriceDataFilter",GetSocksPriceDataFilter_NewBackoffice);

app.use("/BackofficeApi/GetFoodHomePageWebsite",GetFoodHomePageWebsite_NewBackoffice);
app.use("/BackofficeApi/GetFootwearHomePageWebsite",GetFootwearHomePageWebsite_NewBackoffice);
app.use("/BackofficeApi/GetSocksHomePageWebsite",GetSocksHomePageWebsite_NewBackoffice);

app.use("/BackofficeApi/AddTransactionLog",AddTransactionLog_NewBackoffice);
app.use("/BackofficeApi/Response",Response_NewBackoffice);
app.use("/BackofficeApi/PaymentResponse",PaymentResponse_NewBackoffice);

app.use("/BackofficeApi/UpdateCustomerPhoto",UpdateCustomerPhoto_NewBackoffice);


app.use("/BackofficeApi/GetHealthCenterDoctorWeb",GetHealthCenterDoctorWeb_NewBackoffice);
app.use("/BackofficeApi/GetDoctorHealthCenterWeb",GetDoctorHealthCenterWeb_NewBackoffice);
app.use("/BackofficeApi/GetHealthCenterNutritionistWeb",GetHealthCenterNutritionistWeb_NewBackoffice);
app.use("/BackofficeApi/Get_UserFamilyInfoByIDWeb",Get_UserFamilyInfoByIDWeb_NewBackoffice);
app.use("/BackofficeApi/DeleteCustomerAddress",DeleteCustomerAddress_NewBackoffice);

app.use("/BackofficeApi/UpdateUserAddressMapping",UpdateUserAddressMapping_NewBackoffice);
app.use("/BackofficeApi/GetOrderHistoryWebsite",GetOrderHistoryWebsite_NewBackoffice);


app.use("/BackofficeApi/GetNutritionistHealthCenterWeb",GetNutritionistHealthCenterWeb_NewBackoffice);

app.use("/BackofficeApi/GetFoodVendorDataAssign",GetFoodVendorDataAssign_NewBackoffice);
app.use("/BackofficeApi/GetFootwearVendorDataAssign",GetFootwearVendorDataAssign_NewBackoffice);
app.use("/BackofficeApi/GetSocksVendorDataAssign",GetSocksVendorDataAssign_NewBackoffice);

app.use("/BackofficeApi/GetBlogSearchWebsite",GetBlogSearchWebsite_NewBackoffice);
app.use("/BackofficeApi/ContactUsMailer",ContactUsMailer_NewBackoffice);

app.use("/BackofficeApi/GetFoodListingSearchPageWeb",GetFoodListingSearchPageWeb_NewBackoffice);
app.use("/BackofficeApi/GetCustomerEmailDetails",GetCustomerEmailDetails_NewBackoffice);
app.use("/BackofficeApi/UpdateOrderConfirmationStatus",UpdateOrderConfirmationStatus_NewBackoffice);
app.use("/BackofficeApi/GetUserInfoEmail",GetUserInfoEmail_NewBackoffice);



app.use("/BackofficeApi/Get_TcsMaster_NewBackoffice",Get_TcsMaster_NewBackoffice);
app.use("/BackofficeApi/Get_TdsMaster_NewBackoffice",Get_TdsMaster_NewBackoffice);
app.use("/BackofficeApi/Update_TcsMaster_NewBackoffice",Update_TcsMaster_NewBackoffice);
app.use("/BackofficeApi/Update_TdsMaster_NewBackoffice",Update_TdsMaster_NewBackoffice);

app.use("/BackofficeApi/GetSplitOrders",GetSplitOrders_NewBackoffice);
app.use("/BackofficeApi/GetSettleOrders",GetSettleOrders_NewBackoffice);

app.use("/BackofficeApi/AddSplitOrders",AddSplitOrders_NewBackoffice);
app.use("/BackofficeApi/GetSplitOrderDetails",GetSplitOrderDetails_NewBackoffice);
app.use("/BackofficeApi/AddPaymentRelease",AddPaymentRelease_NewBackoffice);



app.use("/BackofficeApi/GetSocksMetaData",GetSocksMetaData_NewBackoffice);
app.use("/BackofficeApi/GetFoodMetaData",GetFoodMetaData_NewBackoffice);
app.use("/BackofficeApi/GetFootwearMetaData",GetFootwearMetaData_NewBackoffice);


app.use("/BackofficeApi/Get_ReturnMaster_NewBackoffice",Get_ReturnMaster_NewBackoffice);
app.use("/BackofficeApi/GetRefundOrdersForRelease",GetRefundOrdersForRelease_NewBackoffice);
app.use("/BackofficeApi/UpdateReturnStatus",UpdateReturnStatus_NewBackoffice);
app.use("/BackofficeApi/GetPaymentSplitFromOrder",GetPaymentSplitFromOrder_NewBackoffice);
app.use("/BackofficeApi/AddPaymentRefund",AddPaymentRefund_NewBackoffice);

app.use("/BackofficeApi/GetNewOrderForVerify",GetNewOrderForVerify_NewBackoffice);
app.use("/BackofficeApi/VerifyOrders",VerifyOrders_NewBackoffice);

app.use("/BackofficeApi/GetDashboarshMonthWiseOrdersSales",GetDashboarshMonthWiseOrdersSales_NewBackoffice);

app.use("/BackofficeApi/GetBlogAll",GetBlogAll_NewBackoffice);

app.use("/BackofficeApi/GetCancelOrders",GetCancelOrders_NewBackoffice);

app.use("/BackofficeApi/UpdateCODServiceMaster",UpdateCODServiceMaster_NewBackoffice);
app.use("/BackofficeApi/GetCodMaster",GetCodMaster_NewBackoffice);

app.use("/BackofficeApi/GetOrderDataReports",GetOrderDataReports_NewBackoffice);
app.use("/BackofficeApi/GetCustomerDataReports",GetCustomerDataReports_NewBackoffice);

app.use("/BackofficeApi/GetFoodProductDataReports",GetFoodProductDataReports_NewBackoffice);
app.use("/BackofficeApi/GetFootwearProductDataReports",GetFootwearProductDataReports_NewBackoffice);
app.use("/BackofficeApi/GetSocksProductDataReports",GetSocksProductDataReports_NewBackoffice);

app.use("/BackofficeApi/GetVendorDataReports",GetVendorDataReports_NewBackoffice);

app.use("/BackofficeApi/GetOrderDetailDataReport",GetOrderDetailDataReport_NewBackoffice);

app.use("/BackofficeApi/ForgotPasswordStaff",ForgotPasswordStaff_NewBackoffice);
app.use("/BackofficeApi/ChangePasswordByAdmin",ChangePasswordByAdmin_NewBackoffice);

app.use("/BackofficeApi/GetSettlementReportOrderDetail",GetSettlementReportOrderDetail_NewBackoffice);


app.use("/BackofficeApi/GetFestiveOfferHomePageWebsite",GetFestiveOfferHomePageWebsite_NewBackoffice);
app.use("/BackofficeApi/GetFestiveOfferListing",GetFestiveOfferListing_NewBackoffice);

app.use("/BackofficeApi/GetFestiveFoodVariantDetails",GetFestiveFoodVariantDetails_NewBackoffice);
app.use("/BackofficeApi/GetFestiveFootwearVariantDetails",GetFestiveFootwearVariantDetails_NewBackoffice);
app.use("/BackofficeApi/GetFestiveSocksVariantDetails",GetFestiveSocksVariantDetails_NewBackoffice);

app.use("/BackofficeApi/GetAllFoodBrandData",GetAllFoodBrandData_NewBackoffice);
app.use("/BackofficeApi/GetAllFootwearBrandData",GetAllFootwearBrandData_NewBackoffice);
app.use("/BackofficeApi/GetAllSocksBrandData",GetAllSocksBrandData_NewBackoffice);

app.use("/BackofficeApi/AddFestiveOfferMaster",AddFestiveOfferMaster_NewBackoffice);
app.use("/BackofficeApi/AddFestiveOfferProductMapping",AddFestiveOfferProductMapping_NewBackoffice);
app.use("/BackofficeApi/GetFestiveOfferMaster",GetFestiveOfferMaster_NewBackoffice);
app.use("/BackofficeApi/UpdateFestiveOfferMaster",UpdateFestiveOfferMaster_NewBackoffice);

app.use("/BackofficeApi/GetFestiveOfferProductMapping",GetFestiveOfferProductMapping_NewBackoffice);

app.use("/BackofficeApi/GetFoodItemData",GetFoodItemData_NewBackoffice);
app.use("/BackofficeApi/GetFootwearItemData",GetFootwearItemData_NewBackoffice);
app.use("/BackofficeApi/GetSocksItemData",GetSocksItemData_NewBackoffice);

app.use("/BackofficeApi/AddSmsLog",AddSmsLog_NewBackoffice);
app.use("/BackofficeApi/GetSmsLog",GetSmsLog_NewBackoffice);


app.use("/BackofficeApi/AddAdBannerMaster",AddAdBannerMaster_NewBackoffice);
app.use("/BackofficeApi/UpdateAdBannerImage",UpdateAdBannerImage_NewBackoffice);

app.use("/BackofficeApi/GetAdBannerMaster",GetAdBannerMaster_NewBackoffice);
app.use("/BackofficeApi/UpdateAdBannerMaster",UpdateAdBannerMaster_NewBackoffice);

app.use("/BackofficeApi/Get_AdBannerWebsite",Get_AdBannerWebsite_NewBackoffice);





app.use("/BackofficeApi/AddAccessoriesItemMaster",AddAccessoriesItemMaster_NewBackoffice);
app.use("/BackofficeApi/AddAccessoriesVariantImages",AddAccessoriesVariantImages_NewBackoffice);
app.use("/BackofficeApi/AddAccessoriesVariantVendorPricing",AddAccessoriesVariantVendorPricing_NewBackoffice);
app.use("/BackofficeApi/AddAccessoriesTypeMaster",AddAccessoriesTypeMaster_NewBackoffice);
app.use("/BackofficeApi/AddAccessoriesColorMaster",AddAccessoriesColorMaster_NewBackoffice);
app.use("/BackofficeApi/AddAccessoriesCategoryMaster",AddAccessoriesCategoryMaster_NewBackoffice);
app.use("/BackofficeApi/AddAccessoriesSizeMaster",AddAccessoriesSizeMaster_NewBackoffice);
app.use("/BackofficeApi/AddAccessoriesVariant",AddAccessoriesVariant_NewBackoffice);

app.use("/BackofficeApi/UpdateAccessoriesCategoryMaster",UpdateAccessoriesCategoryMaster_NewBackoffice);
app.use("/BackofficeApi/UpdateAccessoriesSizeMaster",UpdateAccessoriesSizeMaster_NewBackoffice);

app.use("/BackofficeApi/UpdateAccessoriesTypeMaster",UpdateAccessoriesTypeMaster_NewBackoffice);
app.use("/BackofficeApi/UpdateAccessoriesColorMaster",UpdateAccessoriesColorMaster_NewBackoffice);
app.use("/BackofficeApi/UpdateAccessoriesItemMaster",UpdateAccessoriesItemMaster_NewBackoffice);
app.use("/BackofficeApi/UpdateAccessoriesItemVariant",UpdateAccessoriesItemVariant_NewBackoffice);


app.use("/BackofficeApi/DeleteAccessoriesSizeMaster",DeleteAccessoriesSizeMaster_NewBackoffice);
app.use("/BackofficeApi/DeleteAccessoriesCategoryMaster",DeleteAccessoriesCategoryMaster_NewBackoffice);

app.use("/BackofficeApi/DeleteAccessoriesTypeMaster",DeleteAccessoriesTypeMaster_NewBackoffice);
app.use("/BackofficeApi/DeleteAccessoriesColorMaster",DeleteAccessoriesColorMaster_NewBackoffice);
app.use("/BackofficeApi/DeleteAccessoriesVariantImage",DeleteAccessoriesVariantImage_NewBackoffice);



app.use("/BackofficeApi/Get_AccessoriesTypeMaster",Get_AccessoriesTypeMaster_NewBackoffice);
app.use("/BackofficeApi/Get_AccessoriesCategoryData",Get_AccessoriesCategoryData_NewBackoffice);
app.use("/BackofficeApi/Get_AccessoriesItemMaster",Get_AccessoriesItemMaster_NewBackoffice);
app.use("/BackofficeApi/Get_AccessoriesVarientList",Get_AccessoriesVarientList_NewBackoffice);
app.use("/BackofficeApi/Get_AccessoriesSizeData",Get_AccessoriesSizeData_NewBackoffice);
app.use("/BackofficeApi/Get_AccessoriesColorData",Get_AccessoriesColorData_NewBackoffice);
app.use("/BackofficeApi/Get_AccessoriesSizeList",Get_AccessoriesSizeList_NewBackoffice);

app.use("/BackofficeApi/Get_AccessoriesTypeList",Get_AccessoriesTypeList_NewBackoffice);
app.use("/BackofficeApi/Get_AccessoriesColorList",Get_AccessoriesColorList_NewBackoffice);
app.use("/BackofficeApi/Get_AccessoriesCategoryList",Get_AccessoriesCategoryList_NewBackoffice);

app.use("/BackofficeApi/UpdateAccessoriesItemMasterApprovalStatus",UpdateAccessoriesItemMasterApprovalStatus_NewBackoffice);
app.use("/BackofficeApi/UpdateAccessoriesVariantApprovalStatus",UpdateAccessoriesVariantApprovalStatus_NewBackoffice);


app.use("/BackofficeApi/AddCovidSizeMaster",AddCovidSizeMaster_NewBackoffice);
app.use("/BackofficeApi/UpdateCovidSizeMaster",UpdateCovidSizeMaster_NewBackoffice);
app.use("/BackofficeApi/GetCovidSizeList",GetCovidSizeList_NewBackoffice);
app.use("/BackofficeApi/DeleteCovidSizeMaster",DeleteCovidSizeMaster_NewBackoffice);
app.use("/BackofficeApi/GetCovidSizeData",GetCovidSizeData_NewBackoffice);

app.use("/BackofficeApi/GetCovidMasterDetailsWebsite",GetCovidMasterDetailsWebsite_NewBackoffice);
app.use("/BackofficeApi/GetCovidCategoryListingWebsite",GetCovidCategoryListingWebsite_NewBackoffice);
app.use("/BackofficeApi/GetCovidVariantDetailsWebsite",GetCovidVariantDetailsWebsite_NewBackoffice);


app.use("/BackofficeApi/GetCovidListing",GetCovidListing_NewBackoffice);
app.use("/BackofficeApi/GetCovidBrandData",GetCovidBrandData_NewBackoffice);
app.use("/BackofficeApi/GetCovidFilterDataFilter",GetCovidFilterDataFilter_NewBackoffice);
app.use("/BackofficeApi/GetCovidCategoryWebsiteData",GetCovidCategoryWebsiteData_NewBackoffice);
app.use("/BackofficeApi/GetCovidHomePageWebsite",GetCovidHomePageWebsite_NewBackoffice);

app.use("/BackofficeApi/GetCovidCategoryData",GetCovidCategoryData_NewBackoffice);
app.use("/BackofficeApi/GetCovidFilterData",GetCovidFilterData_NewBackoffice);
app.use("/BackofficeApi/GetCovidItemMaster",GetCovidItemMaster_NewBackoffice);
app.use("/BackofficeApi/GetCovidVariantList",GetCovidVariantList_NewBackoffice);
app.use("/BackofficeApi/GetCovidColorData",GetCovidColorData_NewBackoffice);
app.use("/BackofficeApi/GetCovidColorList",GetCovidColorList_NewBackoffice);
app.use("/BackofficeApi/GetCovidCategoryMasterList",GetCovidCategoryMasterList_NewBackoffice);
app.use("/BackofficeApi/GetCovidFilterList",GetCovidFilterList_NewBackoffice);

app.use("/BackofficeApi/AddCovidEssentialsItemMaster",AddCovidEssentials_NewBackoffice);
app.use("/BackofficeApi/AddCovidCategoryMaster",AddCovidCategoryMaster_NewBackoffice);
app.use("/BackofficeApi/AddCovidFilterMaster",AddCovidFilterMaster_NewBackoffice);
app.use("/BackofficeApi/AddCovidVariantImage",AddCovidVariantImage_NewBackoffice);
app.use("/BackofficeApi/AddCovidItemMaster_FilterMapping",AddCovidItemMaster_FilterMapping_NewBackoffice);
app.use("/BackofficeApi/AddCovidColorMaster",AddCovidColorMaster_NewBackoffice);
app.use("/BackofficeApi/AddCovidVariantVendorPricing",AddCovidVariantVendorPricing_NewBackoffice);
app.use("/BackofficeApi/AddCovidVariant",AddCovidVariant_NewBackoffice);


app.use("/BackofficeApi/UpdateCovidItemMaster",UpdateCovidItemMaster_NewBackoffice);
app.use("/BackofficeApi/UpdateCovidVariant",UpdateCovidVariant_NewBackoffice);
app.use("/BackofficeApi/UpdateCovidCategoryMaster",UpdateCovidCategoryMaster_NewBackoffice);
app.use("/BackofficeApi/UpdateCovidColorMaster",UpdateCovidColorMaster_NewBackoffice);
app.use("/BackofficeApi/UpdateCovidFilterMaster",UpdateCovidFilterMaster_NewBackoffice);

app.use("/BackofficeApi/DeleteCovidVariantImage",DeleteCovidVariantImage_NewBackoffice);
app.use("/BackofficeApi/DeleteCovidColorMaster",DeleteCovidColorMaster_NewBackoffice);
app.use("/BackofficeApi/DeleteCovidFilterMaster",DeleteCovidFilterMaster_NewBackoffice);
app.use("/BackofficeApi/DeleteCovidCategoryMaster",DeleteCovidCategoryMaster_NewBackoffice);

app.use("/BackofficeApi/UpdateCovidItemMasterApprovalStatus",UpdateCovidItemMasterApprovalStatus_NewBackoffice);
app.use("/BackofficeApi/UpdateCovidVariantApprovalStatus",UpdateCovidVariantApprovalStatus_NewBackoffice);

app.use("/BackofficeApi/GetCartCovidVariantCookie",GetCartCovidVariantCookie_NewBackoffice);
app.use("/BackofficeApi/GetCartCovidVariant",GetCartCovidVariant_NewBackoffice);
app.use("/BackofficeApi/GetCovidListingSearchPageWeb",GetCovidListingSearchPageWeb_NewBackoffice);


app.use("/BackofficeApi/GetAccessoriesCategoryWebsiteData",GetAccessoriesCategoryWebsiteData_NewBackoffice);
app.use("/BackofficeApi/GetAccessoriesHomePageWebsite",GetAccessoriesHomePageWebsite_NewBackoffice);
app.use("/BackofficeApi/GetAccessoriesListing",GetAccessoriesListing_NewBackoffice);
app.use("/BackofficeApi/GetAccessoriesTypeDataWebsite",GetAccessoriesTypeDataWebsite_NewBackoffice);
app.use("/BackofficeApi/GetAccessoriesColorDataWebsite",GetAccessoriesColorDataWebsite_NewBackoffice);
app.use("/BackofficeApi/GetAccessoriesBrandData",GetAccessoriesBrandData_NewBackoffice);
app.use("/BackofficeApi/GetAccessoriesSizeDataWebsite",GetAccessoriesSizeDataWebsite_NewBackoffice);
app.use("/BackofficeApi/GetFilterAccessoriesListing",GetFilterAccessoriesListing_NewBackoffice);
app.use("/BackofficeApi/GetAccessoriesMasterDetailsWebsite",GetAccessoriesMasterDetailsWebsite_NewBackoffice);
app.use("/BackofficeApi/GetAccessoriesGenderListingWebsite",GetAccessoriesGenderListingWebsite_NewBackoffice);
app.use("/BackofficeApi/GetAccessoriesVariantDetailsWebsite",GetAccessoriesVariantDetailsWebsite_NewBackoffice);

app.use("/BackofficeApi/InsuranceMailer",InsuranceMailer_NewBackoffice);
app.use("/BackofficeApi/GetCartAccessoriesVariant",GetCartAccessoriesVariant_NewBackoffice);

app.use("/BackofficeApi/GetCartAccessoriesVariantCookie",GetCartAccessoriesVariantCookie_NewBackoffice);

app.use("/BackofficeApi/GetAccessoriesListingSearchPageWeb",GetAccessoriesListingSearchPageWeb_NewBackoffice);


app.use("/BackofficeApi/GetAccessoriesOrderDetail",GetAccessoriesOrderDetail_NewBackoffice);
app.use("/BackofficeApi/GetCovidOrderDetail",GetCovidOrderDetail_NewBackoffice);

app.use("/BackofficeApi/GetAccessoriesVendorDataAssign",GetAccessoriesVendorDataAssign_NewBackoffice);
app.use("/BackofficeApi/GetCovidVendorDataAssign",GetCovidVendorDataAssign_NewBackoffice);

app.use("/BackofficeApi/GetVendorCovidOrderDetail",GetVendorCovidOrderDetail_NewBackoffice);
app.use("/BackofficeApi/GetVendorAccessoriesOrderDetail",GetVendorAccessoriesOrderDetail_NewBackoffice);
app.use("/BackofficeApi/GetIfEmailVerified",GetIfEmailVerified_NewBackoffice);

module.exports = app;



