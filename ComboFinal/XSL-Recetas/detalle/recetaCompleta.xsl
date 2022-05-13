<?xml version="1.0" encoding="utf-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
<xsl:output method="xml" version="1.0" encoding="UTF-8" indent="yes"/>

    <xsl:template match="/recepta">
        <h1 class="title">Recetas de <xsl:value-of select="categoria"></xsl:value-of> </h1>
        <h2><xsl:value-of select="nom"></xsl:value-of></h2>
        <xsl:apply-templates select="informacio_general"></xsl:apply-templates>
        <xsl:apply-templates select="ingredients"></xsl:apply-templates>
    </xsl:template>
    <xsl:template match="informacio_general">
        <xsl:value-of select="foto"></xsl:value-of>
        <div class="info_general">
            <p>Comensals:</p>
                <p><xsl:value-of select="comensals"></xsl:value-of></p>
            <p>Temps:</p>
                <p><xsl:value-of select="concat(temps,' ',temps/@unitat)"/></p>
            <p>Dificultat:</p>
            <p><xsl:value-of select="dificultat"/></p>
        </div>
    </xsl:template>

    <xsl:template match="ingredients">
        <p>Ingredients:</p>
        <xsl:for-each select="ingredient">
            <xsl:value-of select="concat(@quantitat,' ',@unitat,' ',text())"></xsl:value-of>
        </xsl:for-each>
    </xsl:template>
</xsl:stylesheet>