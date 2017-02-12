FROM       nodesource/node:4.0
RUN        mkdir /opt/source
COPY       ./source/* /opt/source/
RUN        cd /opt/source; npm install .
WORKDIR    /opt/source
ENTRYPOINT ["node", "/opt/source/main.js"]