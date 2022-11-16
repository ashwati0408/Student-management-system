<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
<xsl:template match="/">
<html> 
<body>
  <h1>Student Information</h1>
  <table border="1">
    <tr bgcolor="#9acd32">
      <th style="text-align:left">Reg_no.</th>
      <th style="text-align:left">First Name</th>
      <th style="text-align:left">Last Name</th>
      <th style="text-align:left">College Name</th>
      <th style="text-align:left">Mail id</th>
      <th style="text-align:left">Phone No.</th>
    </tr>
    <xsl:for-each select="Student_Management_System/Student">
      <xsl:sort select="last_name"/>
      <xsl:if test="phn_num &gt; 1000000000">
      <tr>
        <xsl:choose>
          <xsl:when test="reg_num &gt; R1923005">
            <td bgcolor="#ff00ff">
            <xsl:value-of select="reg_num"/></td>
          </xsl:when>
        <xsl:otherwise>
          <td><xsl:value-of select="reg_num"/></td>
        </xsl:otherwise>
        </xsl:choose>
        <td><xsl:value-of select="first_name"/></td>
        <td><xsl:value-of select="last_name"/></td>
        <td><xsl:value-of select="college_name"/></td>
        <td><xsl:value-of select="email_id"/></td>
        <td><xsl:value-of select="phn_num"/></td>
      </tr>
      </xsl:if>
    </xsl:for-each>
  </table>
</body>
</html>
</xsl:template>
</xsl:stylesheet>

