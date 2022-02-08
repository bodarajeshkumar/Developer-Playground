import os
import sys
import json
import dotenv

service = sys.argv[1]
servicename=sys.argv[2]
region=sys.argv[3]
plan = sys.argv[4]
data = os.popen("ibmcloud resource service-instance-create "+servicename+" "+service+" "+plan+" "+region).read()
print(data)

if(len(data.split("\n"))<3):
    data = json.loads(os.popen("ibmcloud resource service-instances --service-name "+service+" --output json").read())
    print(os.popen("ibmcloud resource service-instances --service-name "+service).read())
    result = [data[0]["region_id"],data[0]["name"].replace(" ", "%20")]
    choice = 0
    while (choice!="y" and choice!="Y" and choice!="n" and choice!="N") :
        print("Creating "+service+" Service Failed as you already have an instance.")
        choice = input("Do you want to use existing instance?(Y/N) ")
        if(choice=="n" or choice=="N"):
            confirm_choice = input("Are you sure? You won't be able to use the application if you proceed.(Y/N) ")
            if(confirm_choice=="y" or confirm_choice=="Y"):
                raise Exception("Service creation stopped.")
            else:
                choice=0
    dotenv.set_key("./.env",service.upper()+"_NAME",result[1])
    dotenv.set_key("./.env",service.upper()+"_LOC",result[0])
    data = os.popen("ibmcloud resource service-instance "+result[1]+" --id").read()
    dotenv.set_key("./.env",service.upper()+"_CRN",data.split("\n")[-2].split(" ")[0])
    # if(servicename=="cp-cos"):
    #     try:
    #         data = json.loads(os.popen("ibmcloud resource service-key-create "+servicename+"-creds Manager --instance-id " +data.split("\n")[-2].split(" ")[0]+" --output json").read())
    #         dotenv.set_key("./.env",service.upper()+"_API_KEY",data["credentials"]["apikey"])
    #         dotenv.set_key("./.env",service.upper()+"_SERVICE_KEY",data["id"])
    #     except:
    #         dotenv.set_key("./.env",service.upper()+"_API_KEY","")
    #         dotenv.set_key("./.env",service.upper()+"_SERVICE_KEY","")
    #     dotenv.set_key("./.env",service.upper()+"_UPDATED","False")
    dotenv.set_key("./.env",service.upper()+"_UPDATED","False")
else:
    dotenv.set_key("./.env",service.upper()+"_NAME",servicename)
    dotenv.set_key("./.env",service.upper()+"_LOC",region)
    data = os.popen("ibmcloud resource service-instance "+servicename+" --id").read()
    dotenv.set_key("./.env",service.upper()+"_CRN",data.split("\n")[-2].split(" ")[0])
    # if(servicename=="cp-cos"):
    #     try:
    #         data = json.loads(os.popen("ibmcloud resource service-key-create "+servicename+"-creds Manager --instance-id " +data.split("\n")[-2].split(" ")[0]+" --output json").read())
    #         dotenv.set_key("./.env",service.upper()+"_API_KEY",data["credentials"]["apikey"])
    #         dotenv.set_key("./.env",service.upper()+"_SERVICE_KEY",data["id"])
    #     except:
    #         dotenv.set_key("./.env",service.upper()+"_API_KEY","")
    #         dotenv.set_key("./.env",service.upper()+"_SERVICE_KEY","")
    #     dotenv.set_key("./.env",service.upper()+"_UPDATED","True")
    dotenv.set_key("./.env",service.upper()+"_UPDATED","True")
print("\n###########################################################")        
os.system("echo Updated "+service+" instance details successfuly")
print("###########################################################")           
